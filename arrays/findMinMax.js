/*
    How do you find the largest and smallest number in an unsorted integer array? 
*/
const findMinMax = (list) => {
  if (list.length === 0) {
    return { min: 0, max: 0 };
  }
  let min = list[0];
  let max = list[0];
  for (const number of list) {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  }
  return { max, min };
};

module.exports = findMinMax;
