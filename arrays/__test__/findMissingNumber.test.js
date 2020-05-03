const { generateArray, shuffle } = require('../../utils/array');
const findMissingNumber = require('../findMissingNumber');

describe('Find the missing number', () => {
  let array = [];

  beforeEach(() => {
    array = generateArray();
  });

  it('Should find the missing number', () => {
    const array = [1, 2, 3, 4, 5];
    let shuffledArray = shuffle(array);
    const copyArray = shuffledArray.concat();
    const expectedValue = copyArray.pop();
    shuffledArray = shuffle(copyArray);
    const result = findMissingNumber(shuffledArray);
    expect(result).toBe(expectedValue);
  });
});
