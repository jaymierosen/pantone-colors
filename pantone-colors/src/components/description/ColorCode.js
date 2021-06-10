import React from "react";

const ColorCode = ({ currVal, first,
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
  twentyfirst }) => {
  let component;
  switch (currVal) {
    case "2000":
      component = (
        <div>
          <h3 key={`swatch-${first.swatch}`} className="swatch-number">
            {first.swatch}
          </h3>
        </div>
      );
      break;
    case "2001":
      component = (
        <div>
          <h3 key={`swatch-${second.swatch}`} className="swatch-number">
            {second.swatch}
          </h3>
        </div>
      );
      break;
    case "2002":
      component = (
        <div>
          <h3 key={`swatch-${third.swatch}`} className="swatch-number">
            {third.swatch}
          </h3>
        </div>
      );
      break;
    case "2003":
      component = (
        <div>
          <h3 key={`swatch-${fourth.swatch}`} className="swatch-number">
            {fourth.swatch}
          </h3>
        </div>
      );
      break;
    case "2004":
      component = (
        <div>
          <h3 key={`swatch-${fifth.swatch}`} className="swatch-number">
            {fifth.swatch}
          </h3>
        </div>
      );
      break;
    default:
      component = (
        <div>
          <h3 key={`swatch-15-4020`} className="swatch-number">
            15-4020
          </h3>
        </div>
      );
      break;
  }
  return component;
};

export default ColorCode;
