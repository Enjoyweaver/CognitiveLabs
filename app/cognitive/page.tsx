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
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
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
      <main className="flex-1 flex flex-col gap-6 max-w-4xl">
        <h2 className="font-bold text-4xl mb-4">
          Cognitive Function Scheduling
        </h2>

        <p className="text-lg">
          Welcome to the Cognitive Function Scheduling app! This tool is
          designed to help you organize your tasks and activities based on
          various cognitive functions, enhancing your efficiency and
          productivity.
        </p>

        <p className="text-lg">
          Here are the cognitive functions we'll be working with:
        </p>

        <ul className="list-disc pl-6 text-lg">
          <li>Analytical</li>
          <li>Perceptual</li>
          <li>Creative</li>
          <li>Conceptual</li>
          <li>Strategic</li>
          <li>Administrative</li>
          <li>Technical</li>
          <li>Collaborative</li>
        </ul>

        <p className="text-lg">
          Let's explore how each cognitive function can contribute to creating
          an efficient schedule:
        </p>

        {/* Add detailed explanations for each cognitive function here */}

        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-2">Analytical Function</h3>
          <p className="text-lg">
            The analytical function allows you to break down complex tasks into
            manageable parts. Use this function to prioritize and focus on
            critical elements of your schedule.
          </p>
        </div>

        {/* Repeat the above structure for other cognitive functions */}
      </main>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://enjoyweaver.vercel.app"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            EnjoyWeaver
          </a>
        </p>
      </footer>
    </div>
  );
}
