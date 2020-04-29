/*
  How to find duplicate numbers in an array if it contains multiple duplicates?
*/

const findDuplicateNumbers = (array) => {
  const map = {};

  for (const i of array) {
    if (i in map) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  }

  return Object.keys(map)
    .filter((key) => map[key] > 1)
    .map((key) => Number.parseInt(key));
};

module.exports = findDuplicateNumbers;
