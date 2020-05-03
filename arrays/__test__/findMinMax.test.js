const { generateArray, shuffle } = require('../../utils/array');
const findMinMax = require('../findMinMax');

describe('Find mix and max numbers', () => {
  let array = [];
  beforeEach(() => {
    array = generateArray();
  });

  it('should return the min', () => {
    const expectedMin = array[0];
    const shuffledArray = shuffle(array);
    const { min } = findMinMax(shuffledArray);
    expect(min).toBe(expectedMin);
  });

  it('should return the max', () => {
    const expectedMax = array[array.length - 1];
    const shuffledArray = shuffle(array);
    const { max } = findMinMax(shuffledArray);
    expect(max).toBe(expectedMax);
  });

  it('should return min, max == 0 if empty array', () => {
    const { min, max } = findMinMax([]);
    expect(min).toBe(0);
    expect(max).toBe(0);
  });
});
