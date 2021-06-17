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
  seventeenth,
  eighteenth,
  ninteenth,
  twentieth,
  twentyfirst,
  twentysecond }) => {
  let component;
  switch (currVal) {
    case "2000":
      component = (
        <div>
          <h3 key={`swatch-${first.colorName}`} className="swatch-color-name">
            {first.colorName}
          </h3>
        </div>
      );
      break;
    case "2001":
      component = (
        <div>
          <h3 key={`swatch-${second.colorName}`} className="swatch-color-name">
            {second.colorName}
          </h3>
        </div>
      );
      break;
    case "2002":
      component = (
        <div>
          <h3 key={`swatch-${third.colorName}`} className="swatch-color-name">
            {third.colorName}
          </h3>
        </div>
      );
      break;
    case "2003":
      component = (
        <div>
          <h3 key={`swatch-${fourth.colorName}`} className="swatch-color-name">
            {fourth.colorName}
          </h3>
        </div>
      );
      break;
    case "2004":
      component = (
        <div>
          <h3 key={`swatch-${fifth.colorName}`} className="swatch-color-name">
            {fifth.colorName}
          </h3>
        </div>
      );
      break;
      case "2005":
      component = (
        <div>
          <h3 key={`swatch-${sixth.colorName}`} className="swatch-color-name">
            {sixth.colorName}
          </h3>
        </div>
      );
      break;
      case "2006":
      component = (
        <div>
          <h3 key={`swatch-${seventh.colorName}`} className="swatch-color-name">
            {seventh.colorName}
          </h3>
        </div>
      );
      break;
      case "2007":
      component = (
        <div>
          <h3 key={`swatch-${eighth.colorName}`} className="swatch-color-name">
            {eighth.colorName}
          </h3>
        </div>
      );
      break;
      case "2008":
      component = (
        <div>
          <h3 key={`swatch-${ninth.colorName}`} className="swatch-color-name">
            {ninth.colorName}
          </h3>
        </div>
      );
      break;
      case "2009":
      component = (
        <div>
          <h3 key={`swatch-${tenth.colorName}`} className="swatch-color-name">
            {tenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2010":
      component = (
        <div>
          <h3 key={`swatch-${eleventh.colorName}`} className="swatch-color-name">
            {eleventh.colorName}
          </h3>
        </div>
      );
      break;
      case "2011":
      component = (
        <div>
          <h3 key={`swatch-${twelfth.colorName}`} className="swatch-color-name">
            {twelfth.colorName}
          </h3>
        </div>
      );
      break;
      case "2012":
      component = (
        <div>
          <h3 key={`swatch-${thirteenth.colorName}`} className="swatch-color-name">
            {thirteenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2013":
      component = (
        <div>
          <h3 key={`swatch-${fourteenth.colorName}`} className="swatch-color-name">
            {fourteenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2014":
      component = (
        <div>
          <h3 key={`swatch-${fifteenth.colorName}`} className="swatch-color-name">
            {fifteenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2015":
      component = (
        <div>
          <h3 key={`swatch-${sixteenth.colorName}`} className="swatch-color-name">
            {sixteenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2016":
      component = (
        <div>
          <h3 key={`swatch-${seventeenth.colorName}`} className="swatch-color-name">
            {seventeenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2017":
      component = (
        <div>
          <h3 key={`swatch-${eighteenth.colorName}`} className="swatch-color-name">
            {eighteenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2018":
      component = (
        <div>
          <h3 key={`swatch-${ninteenth.colorName}`} className="swatch-color-name">
            {ninteenth.colorName}
          </h3>
        </div>
      );
      break;
      case "2019":
      component = (
        <div>
          <h3 key={`swatch-${twentieth.colorName}`} className="swatch-color-name">
            {twentieth.colorName}
          </h3>
        </div>
      );
      break;
      case "2020":
      component = (
        <div>
          <h3 key={`swatch-${twentyfirst.colorName}`} className="swatch-color-name">
            {twentyfirst.colorName}
          </h3>
        </div>
      );
      break;
      case "2021":
      component = (
        <div>
          <h3 key={`swatch-${twentysecond.colorName}`} className="swatch-color-name">
            {twentysecond.colorName}
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
