// QUAD4 | QUAD3
// -------------
// QUAD1 | QUAD2
const quad1 = '-1, 0, -0.86, 0.5, -1, 1, -0.5, 0.86, 0, 1';

const quad2 = '0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0';

const quad3 = '0.86, -0.5, 1, -1, 0.5, -0.86, 0, -1';

const quad4 = '-0.5, -0.86, -0.71, -0.71, -0.86, -0.5';

const points = () => {
  return `${quad1}, ${quad2}, ${quad3}, ${quad4}`;
};

const svg = (str) => {
  let parser = new DOMParser();
  let svgText = 
  `
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='500' height='500'>
    ${str}
    </svg>
  `;

  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svg2b64Str = (svg) => {
  let b64Data = btoa(svg.outerHTML);
  return `data:image/svg+xml;base64,${b64Data}`;
};

const sourceAndSinkSvg = (strokeColor = 'grey' , edgeWidth = 7) => {
  const sourceAndSink = 
  `
    <circle cx='250' cy='250' r='150' fill='none' stroke='${strokeColor}' stroke-width='${edgeWidth}'  />
    <line x1='100' y1='400' x2='400' y2='100' stroke-width='${edgeWidth}' stroke='${strokeColor}'/>
  `;

  return svg2b64Str(svg(sourceAndSink));
};

module.exports = {
  svg: sourceAndSinkSvg,
  points: points
};
