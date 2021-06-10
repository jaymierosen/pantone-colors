import React from "react";

const ColorHex = ({ currVal, first,
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
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background-color: ${first.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${first.hex}`} className="swatch-number">
            {first.hex}
          </h3>
        </div>
      );
      break;
    case "2001":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background-color: ${second.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${second.hex}`} className="swatch-number">
            {second.hex}
          </h3>
        </div>
      );
      break;
    case "2002":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background-color: ${third.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${third.hex}`} className="swatch-number">
            {third.hex}
          </h3>
        </div>
      );
      break;
    case "2003":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background-color: ${fourth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${fourth.hex}`} className="swatch-number">
            {fourth.hex}
          </h3>
        </div>
      );
      break;
    case "2004":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background-color: ${fifth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${fifth.hex}`} className="swatch-number">
            {fifth.hex}
          </h3>
        </div>
      );
      break;
    default:
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background-color: #9DB8D3 }
            `,
            }}
          />
          <h3 key={`hex-#9DB8D3`} className="hex-number">
            #9DB8D3
          </h3>
        </div>
      );
      break;
  }
  return component;
};

export default ColorHex;
