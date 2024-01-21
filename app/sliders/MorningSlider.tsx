"use client";
import React, { useState, ChangeEvent } from "react";
import "./MorningSlider.css";

const MorningSlider: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sliderValue = parseInt(event.target.value, 10);
    setValue(sliderValue);
    document.documentElement.style.setProperty(
      "--value",
      sliderValue.toString()
    );
  };

  const shouldShift = value > -1 && value < 101;

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
  );
};

export default MorningSlider;
