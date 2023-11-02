const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should calculate the area of a circle', () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
  });
});

describe('Triangle', () => {
  it('should calculate the area of a triangle', () => {
    const triangle = new Triangle(6, 8);
    expect(triangle.calculateArea()).toBe(24);
  });
});

describe('Square', () => {
  it('should calculate the area of a square', () => {
    const square = new Square(4);
    expect(square.calculateArea()).toBe(16);
  });
});
