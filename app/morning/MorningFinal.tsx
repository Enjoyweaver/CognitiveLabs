"use client";

import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import "./MorningSlider.css";

interface MorningSliderProps {
  morningvalue: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  morningColor?: string;
  eveningColor?: string;
  morningLabel?: string;
  eveningLabel?: string;
}

const MorningSlider: React.FC<MorningSliderProps> = ({
  morningvalue,
  onChange,
  morningColor = "hsla(24, 90%, 36%, 0.5)",
  eveningColor = "hsla(236, 74%, 54%, 0.5)",
  morningLabel = "morning",
  eveningLabel = "evening",
}) => {
  const shouldShift = morningvalue > -1 && morningvalue < 101;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--morning-value",
      morningvalue.toString()
    );
  }, [morningvalue]);

  return (
    <>
      <div className="morning-slider-container">
        <div className="control">
          <input
            id="morning-track" // Changed id to ensure uniqueness
            type="range"
            min="0"
            max="100"
            value={morningvalue}
            onChange={onChange}
            className="morning-slider-input"
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
            color: ${morningColor};
            content: "${morningLabel} " counter(low) "%";
            left: 0.5rem;
          }

          .tooltip::after {
            color: ${eveningColor};
            content: "${eveningLabel} " counter(high) "%";
            right: 0.5rem;
          }

          .control__track::before {
            background: ${morningColor};
          }

          .control__track::after {
            background: ${eveningColor};
          }
        `}
      </style>
    </>
  );
};

const MorningBalance: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [otherInputValue, setOtherInputValue] = useState<string>(""); // Add state for other form inputs

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const morningvalue = parseInt(event.target.value, 10);
    setSliderValue(morningvalue);
    document.documentElement.style.setProperty(
      "--morning-value",
      morningvalue.toString()
    );
  };

  const handleOtherInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const morningvalue = event.target.value;
    setOtherInputValue(morningvalue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission, you can access sliderValue and otherInputValue here
    console.log("Slider Value:", sliderValue);
    console.log("Other Input Value:", otherInputValue);
    // Add your logic for form submission
  };

  return (
    <div>
      <h2>Are you more of a morning person or an evening person?</h2>
      <br />
      <form onSubmit={handleSubmit}>
        {/* MorningSlider component */}
        <MorningSlider
          morningvalue={sliderValue}
          onChange={handleSliderChange}
          morningColor="hsla(24, 90%, 36%, 0.5)"
          eveningColor="hsla(236, 74%, 54%, 0.5)"
          morningLabel="morning"
          eveningLabel="evening"
        />

        <br />
        {/* Submit button */}
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default MorningBalance;
