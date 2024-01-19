// Functions.tsx

import React from "react";
import "./Functions.css";

const Functions = () => {
  return (
    <div className="functions-container">
      <div className="column">
        <h2>Cognitive Functions</h2>
        <ul>
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

      <div className="column">
        <h2>Definitions</h2>
        <ul>
          <li>
            More than one piece may fit into the puzzle, but not all bring the
            same value.
          </li>
          <li>
            Viewing the puzzles from different angles instead of from above the
            coffee table.
          </li>
          <li>
            Generating ideas and solutions in an unstructured and free-flowing
            manner.
          </li>
          <li>
            Creating concepts and forming innovative connections between ideas.
          </li>
          <li>
            Using your resources to the best of their ability, even if they
            aren't designed for that purpose.
          </li>
          <li>
            Organizing and managing tasks, resources, and people efficiently.
          </li>
          <li>
            Applying specialized knowledge and skills to solve practical
            problems.
          </li>
          <li>
            Working cooperatively with others to achieve shared objectives.
          </li>
        </ul>
      </div>

      <div className="column">
        <h2>Examples</h2>
        <ul>
          <li>
            Some people complete a puzzle best by starting with the edges,
            others by the colors, and others just start.
          </li>
          <li>
            The kids' new clothing as a chore, but it could be viewed as a
            chance to help them define their style.
          </li>
          <li>
            Approaching a problem by generating as many ideas as possible
            without worrying about structure or feasibility.
          </li>
          <li>
            Making connections between seemingly unrelated concepts to create
            innovative solutions.
          </li>
          <li>
            Developing a step-by-step plan with milestones and deadlines to
            achieve a long-term objective.
          </li>
          <li>
            Efficiently organizing tasks, resources, and team members to achieve
            project goals.
          </li>
          <li>
            Applying technical expertise to solve practical problems and
            challenges.
          </li>
          <li>
            Collaborating with team members, leveraging each other's strengths,
            to achieve common goals.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Functions;
