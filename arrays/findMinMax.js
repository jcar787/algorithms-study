/*
    How do you find the largest and smallest number in an unsorted integer array? 
*/
const generateRandomArray = (length = 100) => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(Math.floor(Math.random() * 1000));
  }
  return result;
};

const findMinMax = list => {
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

const numberList = generateRandomArray();
const { min, max } = findMinMax(numberList);
console.log(min, max);
