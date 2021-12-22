import React from "react";
import RangeInput from "./RangeInput";

const Slider = ({ currYear, setCurrYear, min, max }) => {
  return (
    <section className="range-slider">
      <RangeInput
        currYear={currYear}
        min={min}
        max={max}
        setCurrYear={setCurrYear}
      />
    </section>
  );
};

export default Slider;
