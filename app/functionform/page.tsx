"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import MorningSlider from "../sliders/MorningSlider";

const YourFormComponent: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [otherInputValue, setOtherInputValue] = useState<string>(""); // Add state for other form inputs

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setSliderValue(value);
    document.documentElement.style.setProperty("--value", value.toString());
  };

  const handleOtherInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtherInputValue(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission, you can access sliderValue and otherInputValue here
    console.log("Slider Value:", sliderValue);
    console.log("Other Input Value:", otherInputValue);
    // Add your logic for form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Other form inputs */}
      <label>
        Are you more of a morning person or a night owl?
        <input
          type="text"
          value={otherInputValue}
          onChange={handleOtherInputChange}
        />
      </label>

      {/* MorningSlider component */}
      <MorningSlider value={sliderValue} onChange={handleSliderChange} />

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
