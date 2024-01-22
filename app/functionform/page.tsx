// YourFormComponent.tsx
import React from "react";
import MorningBalance from "../morning/MorningFinal";
import CoffeeBalance from "../sliders/coffee/CoffeeFinal";

const YourFormComponent: React.FC = () => {
  return (
    <div>
      <h2>Are you more of a morning person or a night owl?</h2>
      <br />

      {/* MorningSlider component */}

      <br />
      <CoffeeBalance />
      {/* Submit button */}
      <br />
      <button type="submit">Submit Form</button>
    </div>
  );
};

export default YourFormComponent;
