const { generateRandomString } = require('../../utils/strings');
const reverseString = require('../reverseString');

describe('Test reverse String', () => {
  let stringTest = '';
  let result = '';
  beforeAll(() => {
    stringTest = generateRandomString();
    result = stringTest.split('').reverse().join('');
  });

  it('should reverse a string iterative', () => {
    const noRecursion = reverseString.reverseNoRecursion(stringTest);
    expect(noRecursion).toBe(result);
  });

  it('should reverse a string stakc', () => {
    const withStack = reverseString.reverseWithStack(stringTest);
    expect(withStack).toBe(result);
  });

  it('should reverse a string recursive', () => {
    const withRecursion = reverseString.reverseWithRecursion(stringTest);
    expect(withRecursion).toBe(result);
  });
});
