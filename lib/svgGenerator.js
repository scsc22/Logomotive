function generateSvg(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
  
    // Define the SVG content based on user input
    const svg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${shapeColor}" />
        <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
      </svg>
    `;
  
    return svg;
  }
  
  module.exports = {
    generateSvg,
  };
  