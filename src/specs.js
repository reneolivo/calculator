import Calc from './app';

describe('Calculator', () => {
  it('should be defined', () => {
    expect(Calc).toBeDefined();
  });

  it('should define a .calculate() method', () => {
    expect(typeof Calc.calculate).toBe('function');
  });

  it('should calculate a + b', () => {
    const result = Calc.calculate('3 + 2');

    expect(result).toBe(5);
  });

  it('should calculate a + b + c', () => {
    const result = Calc.calculate('5 + 2 + 1');

    expect(result).toBe(8);
  });

  it('should calculate a + b - c - d', () => {
    const result = Calc.calculate('10 + 3 - 3 - 2');

    expect(result).toBe(8);
  });

  it('should calculate a + b - c * d', () => {
    const result = Calc.calculate('10 + 7 - 5 * 3');

    expect(result).toBe(2);
  });

  it('should calculate a + b * c / d - e', () => {
    const result = Calc.calculate('10 + 8 / 2 - 5');

    expect(result).toBe(9);
  });
});
