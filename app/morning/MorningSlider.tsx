// MorningSlider.tsx

import React, { useState, ChangeEvent, useEffect } from "react";
import "./MorningSlider.css";

interface MorningSliderProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  morningColor?: string;
  eveningColor?: string;
  morningLabel?: string;
  eveningLabel?: string;
}

const MorningSlider: React.FC<MorningSliderProps> = ({
  value,
  onChange,
  morningColor = "hsla(24, 90%, 36%, 0.5)",
  eveningColor = "hsla(236, 74%, 54%, 0.5)",
  morningLabel = "morning",
  eveningLabel = "evening",
}) => {
  const shouldShift = value > -1 && value < 101;

  useEffect(() => {
    // Set initial value to 50% when the component mounts
    document.documentElement.style.setProperty("--value", "50");
  }, []);

  return (
    <>
      <div className="morning-slider-container">
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

export default MorningSlider;
