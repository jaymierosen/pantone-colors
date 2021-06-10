import React from "react";
import RangeInput from "./RangeInput";

const Slider = ({ currVal, setCurrVal, min, max }) => {
  return (
    <section className="range-slider">
      <RangeInput
        currVal={currVal}
        min={min}
        max={max}
        setCurrVal={setCurrVal}
      />
    </section>
  );
};

export default Slider;
