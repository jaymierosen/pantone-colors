import React from "react";

const ColorName = ({ currVal, first,
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
          <h3 key={`swatch-${first.colorName}`} className="swatch-number">
            {first.colorName}
          </h3>
        </div>
      );
      break;
    case "2001":
      component = (
        <div>
          <h3 key={`swatch-${second.colorName}`} className="swatch-number">
            {second.colorName}
          </h3>
        </div>
      );
      break;
    case "2002":
      component = (
        <div>
          <h3 key={`swatch-${third.colorName}`} className="swatch-number">
            {third.colorName}
          </h3>
        </div>
      );
      break;
    case "2003":
      component = (
        <div>
          <h3 key={`swatch-${fourth.colorName}`} className="swatch-number">
            {fourth.colorName}
          </h3>
        </div>
      );
      break;
    case "2004":
      component = (
        <div>
          <h3 key={`swatch-${fifth.colorName}`} className="swatch-number">
            {fifth.colorName}
          </h3>
        </div>
      );
      break;
    default:
      component = (
        <div>
          <h3 key={`colorName-Cerulean`} className="color-name">
            Cerulean
          </h3>
          
        </div>
      );
      break;
  }
  return component;
};

export default ColorName;
