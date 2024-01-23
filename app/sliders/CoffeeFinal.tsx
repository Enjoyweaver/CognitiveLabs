"use client";

import React, { useState, ChangeEvent, useEffect } from "react";

interface CoffeeSliderProps {
  coffeevalue: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
      <div className="coffeecontrol">
        <input
          id="track"
          type="range"
          min="0"
          max="100"
          value={coffeevalue}
          onChange={onChange}
          className="coffeeslider-input"
        />
        <div
          className="coffeetooltip"
          style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
        ></div>
        <div
          className="coffeecontrol__track"
          style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
        ></div>
      </div>
      <style>{CoffeeSliderStyle}</style>
    </div>
  );
};

const CoffeeForm: React.FC = () => {
  const [coffeeslidervalue, setCoffeeslidervalue] = useState<number>(50);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const coffeevalue = parseInt(event.target.value, 10);
    setCoffeeslidervalue(coffeevalue);
    document.documentElement.style.setProperty(
      "--coffee-value",
      coffeevalue.toString()
    );
  };

  return (
    <div>
      <h2>Are you more of a coffee person or an evening person?</h2>
      <br />
      <form>
        <CoffeeSlider
          coffeevalue={coffeeslidervalue}
          onChange={handleSliderChange}
        />
        <br />
        <br />
      </form>
    </div>
  );
};

const CoffeeSliderStyle = `
  .coffeetooltip::before {
    color: var(--coffeeColor, hsla(24, 90%, 36%, 0.5));
    content: var(--coffeeLabel, "coffee") " " counter(low) "%";
    left: 0.5rem;
  }

  .coffeetooltip::after {
    color: var(--waterColor, hsla(236, 74%, 54%, 0.5));
    content: var(--waterLabel, "water") " " counter(high) "%";
    right: 0.5rem;
  }

  .coffeecontrol__track::before {
    background: var(--coffeeColor, hsla(24, 90%, 36%, 0.5));
  }

  .coffeecontrol__track::after {
    background: var(--waterColor, hsla(236, 74%, 54%, 0.5));
  }

  @font-face {
  font-family: "Geist Sans";
  src: url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype");
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.coffee-slider-container {
  width: 300px; /* Adjust the width as needed */
  margin: 0 auto;
}

.coffeecontrol {
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.coffeecontrol:focus-within,
.coffeecontrol:hover {
  --active: 1;
}

[type="range"] {
  width: 300px;
  opacity: 0;
  height: 60px;
}

[type="range"]:hover {
  cursor: -webkit-grab;
}

[type="range"]:active {
  cursor: -webkit-grabbing;
}

[type="range"]:focus-visible {
  outline-offset: 0.25rem;
  outline-color: transparent;
}

[type="range"]::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  height: 120px;
  width: 40px;
  margin-top: 0px;
  opacity: 1;
}

[type="range"]::-webkit-slider-runnable-track,
[type="range"]::-moz-range-track {
  height: 120px;
  background: hsla(202, 91%, 78%, 0.5);
  margin-top: -60px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

.coffeetooltip {
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  pointer-events: none;
  transform: translateY(calc(var(--shift, 0) * 50%));
  transition: transform var(--speed) var(--timing);
  z-index: 2;
  counter-reset: low var(--coffee-value) high calc(100 - var(--coffee-value));
}

.coffeetooltip::before,
.coffeetooltip::after {
  --range: calc((50 - (var(--coffee-value) / 100 * 10)) * 1%);
  font-variant: tabular-nums;
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-family: monospace;
}

.coffeecontrol__track {
  --coffee: hsl(
    24 74% calc(24% + (30% * (var(--coffee-value, 0) / 100))) / 0.4
  );
  --water: hsl(0 0% 100% / calc(0.1 + (0.4 * (var(--coffee-value, 0) / 100))));
  height: calc(50% + (var(--shift) * 50%));
  width: 100%;
  position: absolute;
  bottom: 0;
  pointer-events: none;
  transition: height var(--speed) var(--timing);
}

.coffeecontrol__track::before,
.coffeecontrol__track::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 4px;
  transition: width var(--coffee--update);
}

.coffeecontrol__track::before {
  left: 0;
  width: calc(var(--coffee-value, 0) * 1% - 0.5rem);
}

.coffeecontrol__track::after {
  right: 0;
  width: calc((100 - var(--coffee-value, 0)) * 1% - 0.5rem);
}

.coffeecontrol__indicator {
  height: 5%;
  border-radius: 4px;
  width: 4px;
  position: absolute;
  top: 50%;
  background: hsl(0 0% 100% / calc((var(--active, 0) * 0.5) + 0.5));
  left: calc(var(--coffee-value, 0) * 1%);
  z-index: 2;
  translate: -50% -50%;
  transition: left var(--coffee--update), background var(--coffee--update);
}

.coffeeslider-input {
  position: relative;
  width: 100%;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
}

`;

export { CoffeeSlider, CoffeeSliderStyle };

export default CoffeeForm;
