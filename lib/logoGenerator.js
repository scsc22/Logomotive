const fs = require('fs');
const { generateSvg } = require('./svgGenerator');

function createLogo(userInput) {
  const svgContent = generateSvg(userInput);

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

module.exports = {
  createLogo,
};
