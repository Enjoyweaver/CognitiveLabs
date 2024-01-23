"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [cognitiveFunctions, setCognitiveFunctions] = useState<any[] | null>(
    null
  );
  const [newCognitiveFunction, setNewCognitiveFunction] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("notes").select();
      setCognitiveFunctions(data);
    };
    getData();
  }, []);

  const insertData = async () => {
    try {
      const { data, error } = await supabase
        .from("notes")
        .upsert([
          {
            cf_id: 9, // Provide a unique value for the cf_id
            "Cognitive Functions": newCognitiveFunction,
            email: newEmail,
          },
        ])
        .select();

      if (error) {
        console.error(
          "Error inserting data:",
          (error as unknown as Error).message
        );
      } else {
        console.log("Inserted data:", data);
        // Optionally, you can fetch and update the displayed data
        const { data: updatedData } = await supabase.from("notes").select();
        setCognitiveFunctions(updatedData);
      }
    } catch (error) {
      console.error("Error inserting data:", (error as Error).message);
    }
  };

  return (
    <div>
      <form>
        <label>
          New Cognitive Function:
          <input
            type="text"
            value={newCognitiveFunction}
            onChange={(e) => setNewCognitiveFunction(e.target.value)}
          />
        </label>
        <br />
        <label>
          New Email:
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={insertData}>
          Insert Data
        </button>
      </form>
      <pre>{JSON.stringify(cognitiveFunctions, null, 2)}</pre>
    </div>
  );
}
