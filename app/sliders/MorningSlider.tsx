"use client";
import React, { useState, ChangeEvent } from "react";
import "./MorningSlider.css";

const MorningSlider: React.FC = () => {
  const [value, setValue] = useState<number>(86);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  const shouldShift = value > 40 && value < 68;

  return (
    <div className="control">
      <input
        id="track"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <div
        aria-hidden="true"
        className="tooltip"
        style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
      ></div>
      <label htmlFor="track" className="sr-only">
        Morning to Evening Ratio
      </label>
      <div
        className="control__track"
        style={{ "--shift": shouldShift ? 1 : 0 } as React.CSSProperties}
      >
        <div className="control__indicator"></div>
      </div>
    </div>
  );
};

export default MorningSlider;
