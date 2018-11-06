/*
    How do you find the missing number in a given integer array of 1 to 100?
*/

const generateArray = (total = 100) => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    result.push(i);
  }
  return result;
};

const getRandomIndex = (length = 100) => {
  return Math.floor(Math.random() * length);
};

const findMissingNumber = arr => {
  const arrSum = arr.reduce((acum, el) => acum + el, 0);
  const totalSum = generateArray().reduce((acum, el) => acum + el, 0);
  return totalSum - arrSum;
};
const ranIndex = getRandomIndex();
const arrayNumbers = generateArray();
const testArray = [
  ...arrayNumbers.slice(0, ranIndex),
  ...arrayNumbers.slice(ranIndex + 1)
];

console.log(findMissingNumber(testArray));
