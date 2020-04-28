/*
    How do you find the missing number in a given integer array of 1 to 100?
*/
const { generateArray } = require('../utils/array');

const findMissingNumber = (arr) => {
  const arrSum = arr.reduce((acum, el) => acum + el, 0);
  const totalSum = generateArray(arr.length + 1).reduce(
    (acum, el) => acum + el,
    0
  );
  return totalSum - arrSum;
};

module.exports = findMissingNumber;
