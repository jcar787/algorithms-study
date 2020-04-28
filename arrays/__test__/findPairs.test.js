const { generateRandomArray } = require('../../utils/array');
const findPairs = require('../findPairs');

describe('Find Pairs', () => {
  let array = [];
  beforeAll(() => {
    array = generateRandomArray();
  });

  it('Should find pairs for 20', () => {
    const result = 20;
    const pairs = findPairs(array);
    for (const key in pairs) {
      expect(Number.parseInt(key) + pairs[key]).toBe(result);
    }
  });
});
