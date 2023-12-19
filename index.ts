// Визначення базового інтерфейсу для калькулятора
interface Calculator {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
    multiply: (x: number, y: number) => number;
    divide: (x: number, y: number) => number;
  }
  
  // Визначення інтерфейсу для інженерного калькулятора (розширення базового)
  interface EngineerCalculator extends Calculator {
    square: (x: number) => number;
    squareRoot: (x: number) => number;
  }
  
  // Реалізація базового калькулятора
  export const basicCalculator: Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => (y !== 0 ? x / y : NaN), // Обробка ділення на нуль
  };
  
  // Реалізація інженерного калькулятора
  export const engineerCalculator: EngineerCalculator = {
    ...basicCalculator, // Використання базового калькулятора
    square: (x) => x * x,
    squareRoot: (x) => Math.sqrt(x),
  };
  
  // Приклад використання
  const resultAdd = basicCalculator.add(5, 3);
  console.log('Basic Calculator - Addition:', resultAdd);
  
  const resultSquareRoot = engineerCalculator.squareRoot(25);
  console.log('Engineer Calculator - Square Root:', resultSquareRoot);
  