import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./calendar/page";
import reportWebVitals from "./reportWebVitals";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import RootLayout from "./layout";

const supabase = createClient(
  "https://stdtxdmnnuvqxssimiiv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0ZHR4ZG1ubnV2cXhzc2ltaWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NTUwMzMsImV4cCI6MjAyMTAzMTAzM30.wrA196n-vlsJHowcMBktfqZsBzTeL4RTnO1z75wgmkE"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <RootLayout>
        <App />
      </RootLayout>
    </SessionContextProvider>
  </React.StrictMode>
);

reportWebVitals();
