import React from "react";

const ColorHex = ({
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
  seventeenth,
  eighteenth,
  ninteenth,
  twentieth,
  twentyfirst,
  twentysecond,
}) => {
  let component;
  switch (currVal) {
    case "2000":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${first.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${first.hex}`} className="swatch-hex">
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
            body { background: ${second.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${second.hex}`} className="swatch-hex">
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
            body { background: ${third.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${third.hex}`} className="swatch-hex">
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
            body { background: ${fourth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${fourth.hex}`} className="swatch-hex">
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
            body { background: ${fifth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${fifth.hex}`} className="swatch-hex">
            {fifth.hex}
          </h3>
        </div>
      );
      break;
    case "2005":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${sixth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${sixth.hex}`} className="swatch-hex">
            {sixth.hex}
          </h3>
        </div>
      );
      break;
    case "2006":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${seventh.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${seventh.hex}`} className="swatch-hex">
            {seventh.hex}
          </h3>
        </div>
      );
      break;
    case "2007":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${eighth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${eighth.hex}`} className="swatch-hex">
            {eighth.hex}
          </h3>
        </div>
      );
      break;
    case "2008":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${ninth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${ninth.hex}`} className="swatch-hex">
            {ninth.hex}
          </h3>
        </div>
      );
      break;
    case "2009":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${tenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${tenth.hex}`} className="swatch-hex">
            {tenth.hex}
          </h3>
        </div>
      );
      break;
    case "2010":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${eleventh.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${eleventh.hex}`} className="swatch-hex">
            {eleventh.hex}
          </h3>
        </div>
      );
      break;
    case "2011":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${twelfth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${twelfth.hex}`} className="swatch-hex">
            {twelfth.hex}
          </h3>
        </div>
      );
      break;
    case "2012":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${thirteenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${thirteenth.hex}`} className="swatch-hex">
            {thirteenth.hex}
          </h3>
        </div>
      );
      break;
    case "2013":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${fourteenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${fourteenth.hex}`} className="swatch-hex">
            {fourteenth.hex}
          </h3>
        </div>
      );
      break;
    case "2014":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${fifteenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${fifteenth.hex}`} className="swatch-hex">
            {fifteenth.hex}
          </h3>
        </div>
      );
      break;
    case "2015":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${sixteenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${sixteenth.hex}`} className="swatch-hex">
            {sixteenth.hex}
          </h3>
        </div>
      );
      break;
    case "2016":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: linear-gradient(to right, ${seventeenth.hex1} 50%, ${seventeenth.hex2} 50%)
            `,
            }}
          />
          <h3
            key={`swatch-${seventeenth.hex1}-${seventeenth.hex2}`}
            className="swatch-hex"
          >
            {seventeenth.hex1} &amp; {seventeenth.hex2}
          </h3>
        </div>
      );
      break;
    case "2017":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${eighteenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${eighteenth.hex}`} className="swatch-hex">
            {eighteenth.hex}
          </h3>
        </div>
      );
      break;
    case "2018":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${ninteenth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${ninteenth.hex}`} className="swatch-hex">
            {ninteenth.hex}
          </h3>
        </div>
      );
      break;
    case "2019":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${twentieth.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${twentieth.hex}`} className="swatch-hex">
            {twentieth.hex}
          </h3>
        </div>
      );
      break;
    case "2020":
      component = (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: ${twentyfirst.hex} }
            `,
            }}
          />
          <h3 key={`swatch-${twentyfirst.hex}`} className="swatch-hex">
            {twentyfirst.hex}
          </h3>
        </div>
      );
      break;
    case "2021":
      component = (
        <div>
          {/* todos:
          1. figure out why linear gradient is not working
          2. change hex to hex1 to 2021
          3. smooth transition to background with linear gradient
          */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { background: linear-gradient(to right, ${twentysecond.hex} 50%, ${twentysecond.hex2} 50%)
            `,
            }}
          />
          <h3
            key={`swatch-${twentysecond.hex}-${twentysecond.hex2}`}
            className="swatch-hex"
          >
            {twentysecond.hex} &amp; {twentysecond.hex2}
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
            body { background: #9DB8D3 }
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
