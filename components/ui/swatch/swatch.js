import React from "react";
import Description from "../Description/Description";

const Swatch = ({ currVal, first, second, third, fourth, fifth }) => {
  return (
    <section className="swatch">
      <section className="color"></section>
      <section className="description">
        <h2>
          PANTONE<sup>&reg;</sup>
        </h2>
        <Description
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          fifth={fifth}
          currVal={currVal}
        />
      </section>
    </section>
  );
};

export default Swatch;
