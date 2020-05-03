const { generateArray, shuffle } = require('../../utils/array');
const findDuplicateNumbers = require('../findDuplicateNumbers');

describe('Find duplicate numbers', () => {
  let array = [];
  beforeEach(() => {
    array = generateArray();
    array = shuffle(array.concat([2, 4, 6, 8]));
  });

  it('Should find duplicate number', () => {
    const result = findDuplicateNumbers(array);
    const expectedResult = [2, 4, 6, 8];
    expect(result).toEqual(expectedResult);
  });
});
