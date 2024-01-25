import { useState } from "react";
import DateTimePicker from "your-date-time-picker-library"; // Replace with the actual library you are using
import { useSession } from "your-auth-library"; // Replace with the actual authentication library you are using

const CalendarPage: React.FC = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [session] = useSession(); // Replace with the actual hook from your authentication library

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
        "Content-Type": "application/json",
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

  const signOut = () => {
    // Add your sign-out logic here using your authentication library
  };

  return (
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
  );
};

export default CalendarPage;
