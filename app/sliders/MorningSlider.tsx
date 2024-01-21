"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
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

  useEffect(() => {
    // Set initial value to 50% when the component mounts
    document.documentElement.style.setProperty("--value", "50");
  }, []);

  const shouldShift = value > -1 && value < 101;

  return (
    <div className="morning-slider-container">
      <div className="control">
        <input
          id="track"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="slider-input"
        />
        <div
          className="tooltip"
          style={{ "--shift": shouldShift ? 1 : 0 }}
        ></div>
        <div
          className="control__track"
          style={{ "--shift": shouldShift ? 1 : 0 }}
        >
          <div className="control__indicator"></div>
          <div
            className="tooltip"
            style={{ "--shift": shouldShift ? 1 : 0 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MorningSlider;
