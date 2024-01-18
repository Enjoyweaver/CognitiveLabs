"use client";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { useState } from "react";
import { useClient } from "next/data-client";

export default function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const client = useClient(); // Add this line to mark the component as a client
  const [emailInput, setEmailInput] = useState("");
  const [insertError, setInsertError] = useState("");

  const handleInsert = async () => {
    if (!emailInput) {
      setInsertError("Email is required for insertion");
      return;
    }

    const { data, error } = await supabase
      .from("notes")
      .insert([{ email: emailInput }])
      .select();

    if (error) {
      console.log("Insertion Error:", error);
      setInsertError("Error inserting the row");
    }

    if (data) {
      console.log("Inserted Data:", data);
      setInsertError("");
    }
  };

  return (
    <div>
      {/* Input for inserting email */}
      <div>
        <label htmlFor="emailInput">Email for Insertion:</label>
        <input
          type="email"
          id="emailInput"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button onClick={handleInsert}>Insert Email</button>
        {insertError && <p>{insertError}</p>}
      </div>
    </div>
  );
}
