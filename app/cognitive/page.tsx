// Cognitive.tsx
import Link from "next/link";
import { headers, cookies } from "next/headers";
import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const signOut = async () => {
  "use server";

  const cookieStore = cookies();
  return redirect("/login");
};

export default function Cognitive() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex w-full justify-between items-center p-3 border-b border-foreground/10">
        <Link
          href="/"
          className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>
        <form action={signOut}>
          <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
            Logout
          </button>
        </form>
      </div>
      <main className="pt-10 flex-1 flex flex-col gap-6 max-w-4xl">
        <h2 className="text-center font-bold text-4xl mb-4">
          Cognitive Planning
        </h2>

        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          Welcome to Cognitive Plan, the app designed to help you organize your
          tasks and activities based on various cognitive functions, enhancing
          your efficiency and productivity.
        </p>

        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          Here are the cognitive functions we'll be working with and more
          information about them, though do know that we are not saying these
          are all of the cognitive functions, but just that these are the ones
          we'll be working with in this app:
        </p>
        <main className="flex-1 flex flex-col gap-6  p-8">
          <div className="flex gap-6">
            {/* Column 1: Cognitive Functions */}
            <div className="bg-blue-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center">
              <h3 className="text-white text-lg font-bold mb-2">
                Cognitive Functions
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li>Analytical</li>
                <li>Perceptual</li>
                <li>Creative</li>
                <li>Conceptual</li>
                <li>Strategic</li>
                <li>Administrative</li>
                <li>Technical</li>
                <li>Collaborative</li>
              </ul>
            </div>

            {/* Column 2: Definitions */}
            <div className="bg-green-500 p-4 flex flex-col items-center">
              <h3 className="text-white text-lg font-bold mb-2">Definitions</h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li>
                  <strong>Analytical:</strong> Break down complex tasks into
                  manageable parts.
                </li>
                <li>
                  <strong>Perceptual:</strong> Interpret and understand
                  information from the environment.
                </li>
                {/* Add definitions for other cognitive functions */}
              </ul>
            </div>

            {/* Column 3: Examples */}
            <div className="bg-orange-500 rounded-tr-md rounded-br-md p-4 flex flex-col items-center">
              <h3 className="text-white text-lg font-bold mb-2">Examples</h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li>
                  <strong>Analytical:</strong> Prioritize and focus on critical
                  elements of your schedule.
                </li>
                <li>
                  <strong>Perceptual:</strong> Recognize patterns and trends in
                  data.
                </li>
                {/* Add examples for other cognitive functions */}
              </ul>
            </div>
          </div>
        </main>

        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-2">Analytical Function</h3>
          <p className="text-lg">
            The analytical function allows you to break down complex tasks into
            manageable parts. Use this function to prioritize and focus on
            critical elements of your schedule.
          </p>
        </div>
      </main>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Created by{" "}
          <a
            href="https://twitter.com/CognitivePlan"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            CognitiveLabs
          </a>
        </p>
      </footer>
    </div>
  );
}
