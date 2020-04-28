/*
    How do you find all pairs of an integer array whose sum is equal to a given number? 
*/
const { binarySearch } = require('../utils/array');

const findSumPairs = (numberList, goal) => {
  numberList.sort((a, b) => a - b);
  const result = {}; // it's going to hold pairs

  for (let i = 0; i < numberList.length; i++) {
    const currentNumber = numberList[i];
    const searchNumber = goal - currentNumber;
    if (!result[currentNumber] && !result[searchNumber]) {
      if (
        binarySearch(
          searchNumber,
          numberList.slice(0, i).concat(numberList.slice(i + 1))
        )
      ) {
        result[currentNumber] = searchNumber;
      }
    }
  }
  return result;
};

module.exports = findSumPairs;
