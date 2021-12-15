import React from "react";
import Description from "../description/Description";

const Swatch = ({ currentPantone }) => {
  return (
    <section className="swatch">
      <section className="color"></section>
      <section className="description">
        <h2>
          PANTONE<sup className="swatch-superscript">&reg;</sup>
        </h2>
        <Description currentPantone={currentPantone} />
      </section>
    </section>
  );
};

export default Swatch;
