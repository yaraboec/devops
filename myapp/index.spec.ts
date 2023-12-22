import { basicCalculator, engineerCalculator } from './index';

// Тести для базового калькулятора
describe('Basic Calculator', () => {
  test('should add two numbers', () => {
    expect(basicCalculator.add(2, 3)).toBe(5);
  });

  test('should subtract two numbers', () => {
    expect(basicCalculator.subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers', () => {
    expect(basicCalculator.multiply(4, 2)).toBe(8);
  });

  test('should divide two numbers', () => {
    expect(basicCalculator.divide(6, 2)).toBe(3);
  });

  test('should handle division by zero', () => {
    expect(basicCalculator.divide(8, 0)).toBe(NaN);
  });
});

// Тести для інженерного калькулятора
describe('Engineer Calculator', () => {
  test('should square a number', () => {
    expect(engineerCalculator.square(4)).toBe(16);
  });

  test('should calculate square root', () => {
    expect(engineerCalculator.squareRoot(25)).toBe(5);
  });
});
