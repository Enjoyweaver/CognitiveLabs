// Mark the file as a client entry
"use client";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { createClient } from "@/utils/supabase/server";

function Calendar() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [session, setSession] = useState(null);
  const supabase = createClient(cookieStore);

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  const signOut = () => {
    createServerComponentClient({ cookies: document.cookie })
      .auth.signOut()
      .catch((error) => console.error(error));
  };

  const createCalendarEvent = () => {
    console.log("Creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    // Fetch returns a Promise, so no need for async/await
    fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + session.provider_token,
      },
      body: JSON.stringify(event),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        alert("Event created, check your Google Calendar!");
      })
      .catch((error) => console.error(error));
  };

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);

  return (
    <div className="App">
      <div style={{ width: "400px", margin: "30px auto" }}>
        {session ? (
          <>
            <h2>Hey there {session.user.email}</h2>
            <p>Start of your event</p>
            <DateTimePicker onChange={setStart} value={start} />
            <p>End of your event</p>
            <DateTimePicker onChange={setEnd} value={end} />
            <p>Event name</p>
            <input type="text" onChange={(e) => setEventName(e.target.value)} />
            <p>Event description</p>
            <input
              type="text"
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <hr />
            <button onClick={createCalendarEvent}>Create Calendar Event</button>
            <p></p>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <>
            <button onClick={googleSignIn}>Sign in to Google </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Calendar;
