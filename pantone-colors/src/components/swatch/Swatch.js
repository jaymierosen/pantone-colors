import React from "react";
import Description from "../description/Description";

const Swatch = ({
  currVal,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
  thirteenth,
  fourteenth,
  fifteenth,
  sixteenth,
  seventeeth,
  eighteenth,
  ninteen,
  twenty,
  twentyfirst
}) => {
  return (
    <section className="swatch">
      <section className="color"></section>
      <section className="description">
        <h2>
          PANTONE<sup className="swatch-superscript">&reg;</sup>
        </h2>
        <Description
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          fifth={fifth}
          sixth={sixth}
          seventh={seventh}
          eighth={eighth}
          ninth={ninth}
          tenth={tenth}
          eleventh={eleventh}
          twelfth={twelfth}
          thirteenth={thirteenth}
          fourteenth={fourteenth}
          fifteenth={fifteenth}
          sixteenth={sixteenth}
          seventeeth={seventeeth}
          eighteenth={eighteenth}
          ninteen={ninteen}
          twenty={twenty}
          twentyfirst={twentyfirst}
          currVal={currVal}
        />
      </section>
    </section>
  );
};

export default Swatch;
