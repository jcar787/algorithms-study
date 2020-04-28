const {
  generateArray,
  getRandomIndex,
  createDuplicateArray,
  shuffle,
} = require('../../utils/array');
const findDuplicateNumber = require('../findDuplicateNumber');

describe('Find duplicate number', () => {
  let array = [];

  beforeAll(() => {
    array = generateArray();
  });

  it('should find the duplicate number', () => {
    const index = getRandomIndex();
    const arrayWithDuplicate = shuffle(createDuplicateArray(array, index));
    const expectedValue = array[index - 1];
    const result = findDuplicateNumber(arrayWithDuplicate);
    expect(result).toBe(expectedValue);
  });

  it('should return -1 if no duplicate', () => {
    const expectedValue = -1;
    const result = findDuplicateNumber(array);
    expect(result).toBe(expectedValue);
  });
});
