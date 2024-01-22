// coffeeSlider.tsx

import React, { useState, ChangeEvent, useEffect } from "react";
import "./CoffeeSlider.css";

interface CoffeeSliderProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  coffeeColor?: string;
  eveningColor?: string;
  coffeeLabel?: string;
  eveningLabel?: string;
}

const CoffeeSlider: React.FC<CoffeeSliderProps> = ({
  value,
  onChange,
  coffeeColor = "hsla(24, 90%, 36%, 0.5)",
  eveningColor = "hsla(236, 74%, 54%, 0.5)",
  coffeeLabel = "coffee",
  eveningLabel = "water",
}) => {
  const shouldShift = value > -1 && value < 101;

  useEffect(() => {
    // Set initial value to 50% when the component mounts
    document.documentElement.style.setProperty("--value", "50");
  }, []);

  return (
    <>
      <div className="coffee-slider-container">
        <div className="control">
          <input
            id="track"
            type="range"
            min="0"
            max="100"
            value={value}
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
          >
            <div className="control__indicator"></div>
            <div
              className="tooltip"
              style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
            ></div>
          </div>
        </div>
      </div>
      <style>
        {`
          .tooltip::before {
            color: ${coffeeColor};
            content: "${coffeeLabel} " counter(low) "%";
            left: 0.5rem;
          }

          .tooltip::after {
            color: ${eveningColor};
            content: "${eveningLabel} " counter(high) "%";
            right: 0.5rem;
          }

          .control__track::before {
            background: ${coffeeColor};
          }

          .control__track::after {
            background: ${eveningColor};
          }
        `}
      </style>
    </>
  );
};

export default CoffeeSlider;
