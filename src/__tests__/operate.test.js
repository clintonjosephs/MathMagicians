import operate from '../logic/operate';

describe('Run unit tests on operate class', () => {
  it('performs addition operation', () => {
    let value = operate('3', '4', '+');
    expect(value).toBe('7');
    value = operate('5', '5', '+');
    expect(value).toBe('10');
  });

  it('performs subtraction operation', () => {
    let value = operate('5', '4', '-');
    expect(value).toBe('1');
    value = operate('8', '10', '-');
    expect(value).toBe('-2');
    value = operate('6', '4', '-');
    expect(value).toBe('2');
  });

  it('performs multiplication operation', () => {
    let value = operate('5', '4', 'x');
    expect(value).toBe('20');
    value = operate('3', '3', 'x');
    expect(value).toBe('9');
    value = operate('2', '3', 'x');
    expect(value).toBe('6');
  });

  it('performs division operation', () => {
    let value = operate('20', '2', '÷');
    expect(value).toBe('10');
    value = operate('3', '3', '÷');
    expect(value).toBe('1');
    value = operate('5', '0', '÷');
    expect(value).toBe("Can't divide by 0.");
    value = operate('5', '3', '÷');
    expect(value).toBe('1.66666666666666666667');
  });

  it('performs division operation', () => {
    let value = operate(20, 5, '%');
    expect(value).toBe('0');
    value = operate(10, 6, '%');
    expect(value).toBe('4');
    value = operate(5, 0, '%');
    expect(value).toBe("Can't find modulo as can't divide by 0.");
  });
});

describe('Invalid operations', () => {
  it('tests that * is not supported', () => {
    const a = 2;
    const b = 2;

    const operation = () => operate(a, b, '*');

    expect(() => operation()).toThrow("Unknown operation '*'");
  });

  test('tests that / division is not supported', () => {
    const a = 2;
    const b = 2;

    const operation = () => operate(a, b, '/');

    expect(() => operation()).toThrow("Unknown operation '/'");
  });

  test('tests that Should not divide by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });
});
