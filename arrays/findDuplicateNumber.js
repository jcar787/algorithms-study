/*
    How do you find the duplicate number on a given integer array?
*/

const findDuplicateNumber = (arr) => {
  const map = {};
  for (const i of arr) {
    if (i in map) {
      return i;
    } else {
      map[i] = 1;
    }
  }
  return -1;
};

module.exports = findDuplicateNumber;
