"use client";

import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import "./CoffeeSlider.css";

interface CoffeeSliderProps {
  coffeevalue: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  coffeeColor?: string;
  waterColor?: string;
  coffeeLabel?: string;
  waterLabel?: string;
}

const CoffeeSlider: React.FC<CoffeeSliderProps> = ({
  coffeevalue,
  onChange,
}) => {
  const shouldShift = coffeevalue > -1 && coffeevalue < 101;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--coffee-value",
      coffeevalue.toString()
    );
  }, [coffeevalue]);

  return (
    <div className="coffee-slider-container">
      <div className="control">
        <input
          id="track"
          type="range"
          min="0"
          max="100"
          value={coffeevalue}
          onChange={onChange}
          className="slider-input"
        />
        <div
          className="tooltip"
          style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
        ></div>
        <div
          className="control__track"
          style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
        ></div>
      </div>
      <style>{CoffeeSliderStyle}</style>
    </div>
  );
};

const CoffeeBalance: React.FC = () => {
  const [coffeeslidervalue, setCoffeeslidervalue] = useState<number>(50);
  const [otherInputValue, setOtherInputValue] = useState<string>("");

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const coffeevalue = parseInt(event.target.value, 10);
    setCoffeeslidervalue(coffeevalue);
    document.documentElement.style.setProperty(
      "--coffee-value",
      coffeevalue.toString()
    );
  };

  const handleOtherInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const coffeevalue = event.target.value;
    setOtherInputValue(coffeevalue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Slider Value:", coffeeslidervalue);
    console.log("Other Input Value:", otherInputValue);
  };

  return (
    <div>
      <h2>Are you more of a coffee person or an evening person?</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <CoffeeSlider
          coffeevalue={coffeeslidervalue}
          onChange={handleSliderChange}
        />
        <br />
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

const CoffeeSliderStyle = `
  .tooltip::before {
    color: var(--coffeeColor, hsla(24, 90%, 36%, 0.5));
    content: var(--coffeeLabel, "coffee") " " counter(low) "%";
    left: 0.5rem;
  }

  .tooltip::after {
    color: var(--waterColor, hsla(236, 74%, 54%, 0.5));
    content: var(--waterLabel, "water") " " counter(high) "%";
    right: 0.5rem;
  }

  .control__track::before {
    background: var(--coffeeColor, hsla(24, 90%, 36%, 0.5));
  }

  .control__track::after {
    background: var(--waterColor, hsla(236, 74%, 54%, 0.5));
  }
`;

export { CoffeeSlider, CoffeeSliderStyle };

export default CoffeeBalance;
