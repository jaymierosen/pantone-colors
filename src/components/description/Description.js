import React from "react";

// Components
import ColorCode from "./ColorCode";
import ColorHex from "./ColorHex";
import ColorName from "./ColorName";

const Description = ({ currVal,
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
  seventeenth,
  eighteenth,
  ninteenth,
  twentieth,
  twentyfirst,
  twentysecond }) => {
  return (
    <div>
      <ColorHex
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
        seventeenth={seventeenth}
        eighteenth={eighteenth}
        ninteenth={ninteenth}
        twentieth={twentieth}
        twentyfirst={twentyfirst}
        twentysecond={twentysecond}
        currVal={currVal}
      />
      <ColorCode
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
        seventeenth={seventeenth}
        eighteenth={eighteenth}
        ninteenth={ninteenth}
        twentieth={twentieth}
        twentyfirst={twentyfirst}
        twentysecond={twentysecond}
        currVal={currVal}
      />
      <ColorName
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
        seventeenth={seventeenth}
        eighteenth={eighteenth}
        ninteenth={ninteenth}
        twentieth={twentieth}
        twentyfirst={twentyfirst}
        twentysecond={twentysecond}
        currVal={currVal}
      />
    </div>
  );
};

export default Description;
