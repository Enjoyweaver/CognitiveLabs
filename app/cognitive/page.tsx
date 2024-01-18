// Cognitive.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton"; // Import AuthButton if needed
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import styles from "./CognitiveStyles.module.css";

const signOut = async () => {
  "use server";
  const cookieStore = cookies();
  return redirect("/login");
};

export default function Cognitive() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-20">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
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
      </nav>

      <main className="flex-1 flex flex-col gap-6 max-w-4xl mx-auto">
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
        <main className="flex-1 flex flex-col gap-2  p-8">
          <div className="flex gap-6">
            {/* Column 1: Cognitive Functions */}
            <div
              className={`bg-blue-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center ${styles.rowHeight}`}
            >
              <h3 className="text-white text-lg font-bold mb-2 h-20">
                Cognitive Functions
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li className="h-60">Analytical</li>
                <li className="h-60">Perceptual</li>
                <li className="h-60">Creative</li>
                <li className="h-60">Conceptual</li>
                <li className="h-60">Strategic</li>
                <li className="h-60">Administrative</li>
                <li className="h-60">Technical</li>
                <li className="h-60">Collaborative</li>
              </ul>
            </div>

            {/* Column 2: Definitions */}
            <div
              className={`bg-green-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center ${styles.rowHeight}`}
            >
              <h3 className="text-white text-lg font-bold mb-2 h-20">
                Definitions
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li className="h-60">
                  More than one piece may fit into the puzzle, but not all bring
                  the same value, or at the same time.
                </li>
                <li className="h-60">
                  Viewing the puzzles from different angles instead of from
                  above the coffee table.
                </li>
                <li className="h-60">
                  Generating ideas and solutions in an unstructured and
                  free-flowing manner.
                </li>
                <li className="h-60">
                  Understanding abstract concepts and forming innovative
                  connections between ideas.
                </li>
                <li className="h-60">
                  Planning and executing long-term strategies to achieve
                  specific goals.
                </li>
                <li className="h-60">
                  Organizing and managing tasks, resources, and people
                  efficiently.
                </li>
                <li className="h-60">
                  Applying specialized knowledge and skills to solve practical
                  problems.
                </li>
                <li className="h-60">
                  Working cooperatively with others to achieve shared
                  objectives.
                </li>
              </ul>
            </div>

            {/* Column 3: Examples */}
            <div
              className={`bg-orange-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center ${styles.rowHeight}`}
            >
              <h3 className="text-white text-lg font-bold mb-2 h-20">
                Examples
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li className="h-60">
                  Some people complete a puzzle best by starting with the edges,
                  others by the colors, and others just start.
                </li>
                <li className="h-60">
                  You may view picking out the kids new clothing as a chore, but
                  it could be viewed as a chance to help them define their
                  style.
                </li>
                <li className="h-60">
                  Approaching a problem by generating as many ideas as possible
                  without worrying about structure or feasibility.
                </li>
                <li className="h-60">
                  Making connections between seemingly unrelated concepts to
                  create innovative solutions.
                </li>
                <li className="h-60">
                  Developing a step-by-step plan with milestones and deadlines
                  to achieve a long-term objective.
                </li>
                <li className="h-60">
                  Efficiently organizing tasks, resources, and team members to
                  achieve project goals.
                </li>
                <li className="h-60">
                  Applying technical expertise to solve practical problems and
                  challenges.
                </li>
                <li className="h-60">
                  Collaborating with team members, leveraging each other's
                  strengths, to achieve common goals.
                </li>
              </ul>
            </div>
          </div>
        </main>
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
