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
          <h3 key={`swatch-${first.swatch}`} className="swatch-color-code">
            {first.swatch}
          </h3>
        </div>
      );
      break;
    case "2001":
      component = (
        <div>
          <h3 key={`swatch-${second.swatch}`} className="swatch-color-code">
            {second.swatch}
          </h3>
        </div>
      );
      break;
    case "2002":
      component = (
        <div>
          <h3 key={`swatch-${third.swatch}`} className="swatch-color-code">
            {third.swatch}
          </h3>
        </div>
      );
      break;
    case "2003":
      component = (
        <div>
          <h3 key={`swatch-${fourth.swatch}`} className="swatch-color-code">
            {fourth.swatch}
          </h3>
        </div>
      );
      break;
    case "2004":
      component = (
        <div>
          <h3 key={`swatch-${fifth.swatch}`} className="swatch-color-code">
            {fifth.swatch}
          </h3>
        </div>
      );
      break;
      case "2005":
      component = (
        <div>
          <h3 key={`swatch-${sixth.swatch}`} className="swatch-color-code">
            {sixth.swatch}
          </h3>
        </div>
      );
      break;
      case "2006":
      component = (
        <div>
          <h3 key={`swatch-${seventh.swatch}`} className="swatch-color-code">
            {seventh.swatch}
          </h3>
        </div>
      );
      break;
      case "2007":
      component = (
        <div>
          <h3 key={`swatch-${eighth.swatch}`} className="swatch-color-code">
            {eighth.swatch}
          </h3>
        </div>
      );
      break;
      case "2008":
      component = (
        <div>
          <h3 key={`swatch-${ninth.swatch}`} className="swatch-color-code">
            {ninth.swatch}
          </h3>
        </div>
      );
      break;
      case "2009":
      component = (
        <div>
          <h3 key={`swatch-${tenth.swatch}`} className="swatch-color-code">
            {tenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2010":
      component = (
        <div>
          <h3 key={`swatch-${eleventh.swatch}`} className="swatch-color-code">
            {eleventh.swatch}
          </h3>
        </div>
      );
      break;
      case "2011":
      component = (
        <div>
          <h3 key={`swatch-${twelfth.swatch}`} className="swatch-color-code">
            {twelfth.swatch}
          </h3>
        </div>
      );
      break;
      case "2012":
      component = (
        <div>
          <h3 key={`swatch-${thirteenth.swatch}`} className="swatch-color-code">
            {thirteenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2013":
      component = (
        <div>
          <h3 key={`swatch-${fourteenth.swatch}`} className="swatch-color-code">
            {fourteenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2014":
      component = (
        <div>
          <h3 key={`swatch-${fifteenth.swatch}`} className="swatch-color-code">
            {fifteenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2015":
      component = (
        <div>
          <h3 key={`swatch-${sixteenth.swatch}`} className="swatch-color-code">
            {sixteenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2016":
      component = (
        <div>
          <h3 key={`swatch-${seventeenth.swatch}`} className="swatch-color-code">
            {seventeenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2017":
      component = (
        <div>
          <h3 key={`swatch-${eighteenth.swatch}`} className="swatch-color-code">
            {eighteenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2018":
      component = (
        <div>
          <h3 key={`swatch-${ninteenth.swatch}`} className="swatch-color-code">
            {ninteenth.swatch}
          </h3>
        </div>
      );
      break;
      case "2019":
      component = (
        <div>
          <h3 key={`swatch-${twentieth.swatch}`} className="swatch-color-code">
            {twentieth.swatch}
          </h3>
        </div>
      );
      break;
      case "2020":
      component = (
        <div>
          <h3 key={`swatch-${twentyfirst.swatch}`} className="swatch-color-code">
            {twentyfirst.swatch}
          </h3>
        </div>
      );
      break;
      case "2021":
      component = (
        <div>
          <h3 key={`swatch-${twentysecond.swatch}`} className="swatch-color-code">
            {twentysecond.swatch}
          </h3>
        </div>
      );
      break;
    default:
      component = (
        <div>
          <h3 key={`swatch-15-4020`} className="swatch-color-code">
            15-4020
          </h3>
        </div>
      );
      break;
  }
  return component;
};

export default ColorCode;
