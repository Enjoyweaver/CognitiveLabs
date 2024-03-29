import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import Body from "@/components/Body";
import "./globals.css";
import Why from "@/components/Why";
import AccountButton from "@/components/AccountButton";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
          {isSupabaseConnected && <AccountButton />}
        </div>
      </nav>
      <div className="animate-in flex-1 flex flex-col gap-10 opacity-0 px-3">
        <Header />
        <Why />
        <Body />
        <main className="flex-1 flex flex-col gap-6 max-w-4xl">
          <h2 className="font-bold text-2xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Created by{" "}
          <a
            href="https://twitter.com/CognitivePlan"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Cognitive Labs
          </a>
        </p>
      </footer>
    </div>
  );
}
