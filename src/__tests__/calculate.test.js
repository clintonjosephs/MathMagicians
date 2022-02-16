import calculate from '../logic/calculate';

let item = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculator function tests', () => {
  it('Tests the sum operation', () => {
    item = {
      total: '55',
      next: '100',
      operation: '+',
    };

    const { total } = calculate(item, '=');
    expect(total).toBe('155');
  });

  it('Tests the substration operation', () => {
    item = {
      total: '12',
      next: '6',
      operation: '-',
    };

    const { total } = calculate(item, '=');
    expect(total).toBe('6');
  });

  test('Tests division operation', () => {
    item = {
      total: '12',
      next: '6',
      operation: '÷',
    };

    const { total } = calculate(item, '=');
    expect(total).toBe('2');
  });

  test('Tests multiplication operation', () => {
    item = {
      total: '3',
      next: '3',
      operation: 'x',
    };

    const { total } = calculate(item, '=');
    expect(total).toBe('9');
  });

  test('Tests modulus operation', () => {
    item = {
      total: '33',
      next: '4',
      operation: '%',
    };

    const { total } = calculate(item, '=');
    expect(total).toBe('1');
  });

  test('Tests +- button', () => {
    item = {
      total: '10',
      next: '18',
      operation: '-',
    };

    const { next } = calculate(item, '+/-');
    expect(next).toBe('-18');
  });

  test('Tests reset (AC) button', () => {
    item = {
      total: '5',
      next: '5',
      operation: 'x',
    };

    expect(calculate(item, 'AC')).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });
});
