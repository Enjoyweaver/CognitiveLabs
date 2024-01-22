"use client";
import React, { useState, FormEvent } from "react";
import MorningForm from "../sliders/MorningFinal";
import CoffeeForm from "../sliders/CoffeeFinal";

const YourFormComponent: React.FC = () => {
  const [morningValue, setMorningValue] = useState<number>(50);
  const [coffeeValue, setCoffeeValue] = useState<number>(50);

  const handleMorningChange = (value: number) => {
    setMorningValue(value);
  };

  const handleCoffeeChange = (value: number) => {
    setCoffeeValue(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Morning Value:", morningValue);
    console.log("Coffee Value:", coffeeValue);
    // Add logic to submit the values to your backend or perform further actions
  };

  return (
    <div>
      <br />
      <MorningForm />
      {/* MorningSlider component */}

      <br />
      <CoffeeForm />
      {/* CoffeeSlider component */}

      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit Form
      </button>
    </div>
  );
};

export default YourFormComponent;
