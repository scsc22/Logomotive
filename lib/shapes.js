class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class Square {
    constructor(side) {
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  