"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import MorningFinal from "../sliders/morning/MorningFinal";
import CoffeeFinal from "../sliders/coffee/CoffeeFinal";

const YourFormComponent: React.FC = () => {
  const [morningSliderValue, setMorningSliderValue] = useState<number>(50);
  const [coffeeSliderValue, setCoffeeSliderValue] = useState<number>(50);
  const [otherInputValue, setOtherInputValue] = useState<string>("");

  const handleMorningSliderChange = (value: number) => {
    setMorningSliderValue(value);
  };

  const handleCoffeeSliderChange = (value: number) => {
    setCoffeeSliderValue(value);
  };

  const handleOtherInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtherInputValue(value);
  };

  useEffect(() => {
    // Set styling variables on the client side
    document.documentElement.style.setProperty(
      "--morning-value",
      morningSliderValue.toString()
    );
    document.documentElement.style.setProperty(
      "--coffee-value",
      coffeeSliderValue.toString()
    );
  }, [morningSliderValue, coffeeSliderValue]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission, you can access morningSliderValue, coffeeSliderValue, and otherInputValue here
    console.log("Morning Slider Value:", morningSliderValue);
    console.log("Coffee Slider Value:", coffeeSliderValue);
    console.log("Other Input Value:", otherInputValue);
    // Add your logic for form submission
  };

  return (
    <div>
      <h2>Are you more of a morning person or a night owl?</h2>
      <br />
      <form onSubmit={handleSubmit}>
        {/* MorningSlider component */}
        <MorningFinal
          value={morningSliderValue}
          onChange={handleMorningSliderChange}
        />
        <br />
        {/* CoffeeSlider component */}
        <CoffeeFinal
          value={coffeeSliderValue}
          onChange={handleCoffeeSliderChange}
        />
        {/* Submit button */}
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default YourFormComponent;
