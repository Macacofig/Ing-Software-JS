import { fizzBuzz } from '../src/FizBuzz.js';

describe('FizzBuzz', () => {
  it('deberia retornar "" si el numero es 0', () => {
    expect(fizzBuzz(0)).toEqual("");
  });
  it('deberia retornar "" si el numero es negativo', () => {
    expect(fizzBuzz(-1)).toEqual("");
  });
  it('deberia retornar "1" si el numero es 1', () => {
    expect(fizzBuzz(1)).toEqual("1");
  });
  it('deberia retornar "1 2" si el numero es 2', () => {
    expect(fizzBuzz(2)).toEqual("1 2");
  });
  it('deberia retornar "1 2 fizz" si el numero es 3', () => {
    expect(fizzBuzz(3)).toEqual("1 2 fizz");
  });
});