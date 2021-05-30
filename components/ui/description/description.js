import React from "react";

const Description = ({ currVal, first, second, third, fourth, fifth }) => {
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
          <h3 key={`hex-${first.hex}`} className="hex-number">
            {first.hex}
          </h3>
          <h3 key={`swatch-${first.swatch}`} className="swatch-number">
            {first.swatch}
          </h3>
          <h3 key={`colorName-${first.colorName}`} className="color-name">
            {first.colorName}
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
          <h3 key={`hex-${second.hex}`} className="hex-number">
            {second.hex}
          </h3>
          <h3 key={`swatch-${second.swatch}`} className="swatch-number">
            {second.swatch}
          </h3>
          <h3 key={`colorName-${second.colorNameName}`} className="color-name">
            {second.colorName}
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
          <h3 key={`hex-${third.hex}`} className="hex-number">
            {third.hex}
          </h3>
          <h3 key={`swatch-${third.swatch}`} className="swatch-number">
            {third.swatch}
          </h3>
          <h3 key={`colorName-${third.colorNameName}`} className="color-name">
            {third.colorName}
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
          <h3 key={`hex-${fourth.hex}`} className="hex-number">
            {fourth.hex}
          </h3>
          <h3 key={`swatch-${fourth.swatch}`} className="swatch-number">
            {fourth.swatch}
          </h3>
          <h3 key={`colorName-${fourth.colorNameName}`} className="color-name">
            {fourth.colorName}
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
          <h3 key={`hex-${fifth.hex}`} className="hex-number">
            {fifth.hex}
          </h3>
          <h3 key={`swatch-${fifth.swatch}`} className="swatch-number">
            {fifth.swatch}
          </h3>
          <h3 key={`colorName-${fifth.colorNameName}`} className="color-name">
            {fifth.colorName}
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
          <h3 key={`swatch-15-4020`} className="swatch-number">
            15-4020
          </h3>
          <h3 key={`colorName-Cerulean`} className="color-name">
            Cerulean
          </h3>
        </div>
      );
      break;
  }
  return component;
};

export default Description;
