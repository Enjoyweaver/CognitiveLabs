import React from "react";
import "./Functions.css";

// Define the FunctionsProps type
export interface FunctionsProps {
  isMobile: boolean;
}

// Use the FunctionsProps type in your functional component
const Functions: React.FC<FunctionsProps> = ({ isMobile }) => {
  const rowHeight = isMobile ? 40 : 80;

  return (
    <div className="functions-container">
      <div className="column">
        <div style={{ height: rowHeight }}>Cognitive Functions</div>
        <div style={{ height: rowHeight }}>Analytical</div>
        <div style={{ height: rowHeight }}>Perceptual</div>
        <div style={{ height: rowHeight }}>Creative</div>
        <div style={{ height: rowHeight }}>Conceptual</div>
        <div style={{ height: rowHeight }}>Strategic</div>
        <div style={{ height: rowHeight }}>Administrative</div>
        <div style={{ height: rowHeight }}>Technical</div>
        <div style={{ height: rowHeight }}>Collaborative</div>
      </div>
      <div className="column">
        <div style={{ height: rowHeight }}>Definitions</div>
        <div style={{ height: rowHeight }}>
          More than one piece may fit into the puzzle, but not all bring the
          same value.
        </div>
        <div style={{ height: rowHeight }}>
          Viewing the puzzles from different angles instead of from above the
          coffee table.
        </div>
        <div style={{ height: rowHeight }}>
          Generating ideas and solutions in an unstructured and free-flowing
          manner.
        </div>
        <div style={{ height: rowHeight }}>
          Creating concepts and forming innovative connections between ideas.
        </div>
        <div style={{ height: rowHeight }}>
          Using your resources to the best of their ability, even if they aren't
          designed for that purpose.
        </div>
        <div style={{ height: rowHeight }}>
          Organizing and managing tasks, resources, and people efficiently.
        </div>
        <div style={{ height: rowHeight }}>
          Applying specialized knowledge and skills to solve practical problems.
        </div>
        <div style={{ height: rowHeight }}>
          Working cooperatively with others to achieve shared objectives.
        </div>
      </div>
      <div className="column">
        <div style={{ height: rowHeight }}>Examples</div>
        <div style={{ height: rowHeight }}>
          Some people complete a puzzle best by starting with the edges, others
          by the colors, and others just start.
        </div>
        <div style={{ height: rowHeight }}>
          The kids' new clothing as a chore, but it could be viewed as a chance
          to help them define their style.
        </div>
        <div style={{ height: rowHeight }}>
          Approaching a problem by generating as many ideas as possible without
          worrying about structure or feasibility.
        </div>
        <div style={{ height: rowHeight }}>
          Making connections between seemingly unrelated concepts to create
          innovative solutions.
        </div>
        <div style={{ height: rowHeight }}>
          Developing a step-by-step plan with milestones and deadlines to
          achieve a long-term objective.
        </div>
        <div style={{ height: rowHeight }}>
          Efficiently organizing tasks, resources, and team members to achieve
          project goals.
        </div>
        <div style={{ height: rowHeight }}>
          Applying technical expertise to solve practical problems and
          challenges.
        </div>
        <div style={{ height: rowHeight }}>
          Collaborating with team members, leveraging each other's strengths, to
          achieve common goals.
        </div>
      </div>
    </div>
  );
};

export default Functions;
