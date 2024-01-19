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
    <div className="flex-1 w-full flex flex-col gap-20 items-center px-3">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
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

      <main className="flex-1 w-full flex flex-col gap-20 items-center">
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
        <main className="flex-1 w-full flex flex-col gap-20 items-center">
          <div className="flex gap-6">
            {/* Column 1: Cognitive Functions */}
            <div
              className={`bg-blue-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center row-height-desktop`}
            >
              <h3 className="text-white text-lg font-bold mb-2 h-20">
                Cognitive Functions
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li className={styles.row}>Analytical</li>
                <li className={styles.row}>Perceptual</li>
                <li className={styles.row}>Creative</li>
                <li className={styles.row}>Conceptual</li>
                <li className={styles.row}>Strategic</li>
                <li className={styles.row}>Administrative</li>
                <li className={styles.row}>Technical</li>
                <li className={styles.row}>Collaborative</li>
              </ul>
            </div>

            <div
              className={`bg-green-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center row-height-desktop`}
            >
              <h3 className="text-white text-lg font-bold mb-2 h-20">
                Definitions
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li className={styles.row}>
                  More than one piece may fit into the puzzle, but not all bring
                  the same value.
                </li>
                <li className={styles.row}>
                  Viewing the puzzles from different angles instead of from
                  above the coffee table.
                </li>
                <li className={styles.row}>
                  Generating ideas and solutions in an unstructured and
                  free-flowing manner.
                </li>
                <li className={styles.row}>
                  Creating concepts and forming innovative connections between
                  ideas.
                </li>
                <li className={styles.row}>
                  Using your resources to the best of their ability, even if
                  they aren't designed for that purpose.
                </li>
                <li className={styles.row}>
                  Organizing and managing tasks, resources, and people
                  efficiently.
                </li>
                <li className={styles.row}>
                  Applying specialized knowledge and skills to solve practical
                  problems.
                </li>
                <li className={styles.row}>
                  Working cooperatively with others to achieve shared
                  objectives.
                </li>
              </ul>
            </div>

            {/* Column 3: Examples */}
            <div
              className={`bg-orange-500 rounded-tl-md rounded-bl-md p-4 flex flex-col items-center row-height-desktop`}
            >
              <h3 className="text-white text-lg font-bold mb-2 h-20">
                Examples
              </h3>
              <ul className="list-disc pl-3 text-white text-lg">
                <li className={styles.row}>
                  Some people complete a puzzle best by starting with the edges,
                  others by the colors, and others just start.
                </li>
                <li className={styles.row}>
                  The kids' new clothing as a chore, but it could be viewed as a
                  chance to help them define their style.
                </li>
                <li className={styles.row}>
                  Approaching a problem by generating as many ideas as possible
                  without worrying about structure or feasibility.
                </li>
                <li className={styles.row}>
                  Making connections between seemingly unrelated concepts to
                  create innovative solutions.
                </li>
                <li className={styles.row}>
                  Developing a step-by-step plan with milestones and deadlines
                  to achieve a long-term objective.
                </li>
                <li className={styles.row}>
                  Efficiently organizing tasks, resources, and team members to
                  achieve project goals.
                </li>
                <li className={styles.row}>
                  Applying technical expertise to solve practical problems and
                  challenges.
                </li>
                <li className={styles.row}>
                  Collaborating with team members, leveraging each other's
                  strengths, to achieve common goals.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </main>

      <div className="mb-4 max-w-lg mx-auto">
        <h3 className="font-bold text-sm mb-2 text-center">Sources:</h3>
        <ul className="list-disc pl-4 ">
          <li>
            <a
              href="https://www.frontiersin.org/articles/10.3389/fnhum.2017.00188/full"
              target="_blank"
              rel="noreferrer"
            >
              Identifying the Best Times for Cognitive Functioning
            </a>{" "}
            by M. D. R. Evans, Paul Kelley, Jonathan Kelley
          </li>
          <li>
            <a
              href="https://answers.childrenshospital.org/circadian-rhythms-synapses/"
              target="_blank"
              rel="noreferrer"
            >
              Timing is everything: How circadian rhythms influence our brains
            </a>{" "}
            by Nancy Fliesler
          </li>
          <li>
            <a
              href="https://apps.dtic.mil/sti/tr/pdf/ADA064445.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Cognitive Processes in Planning
            </a>{" "}
            by Barbara Hayes-Roth, Frederick Hayes-Roth (December 1978)
          </li>
          <li>
            <a
              href="https://www.cell.com/cell/fulltext/S0092-8674(15)00375-X"
              target="_blank"
              rel="noreferrer"
            >
              The Circadian Protein BMAL1 Regulates Translation in Response to
              S6K1-Mediated Phosphorylation
            </a>{" "}
            by Jonathan O. Lipton, Elizabeth D. Yuan, Lara M. Boyle, Fred Davis,
            John M. Asara, Mustafa Sahin (Published: May 14, 2015)
          </li>
        </ul>
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
