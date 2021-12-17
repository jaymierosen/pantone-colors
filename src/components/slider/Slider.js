import React from "react";
import RangeInput from "./RangeInput";

const Slider = ({ setIsMounted, isMounted, currYear, setCurrYear, min, max }) => {
  return (
    <section className="range-slider">
      <RangeInput
        currYear={currYear}
        min={min}
        max={max}
        setCurrYear={setCurrYear}
        setIsMounted={setIsMounted}
        isMounted={isMounted}
      />
    </section>
  );
};

export default Slider;
