/*
    How do you find the duplicate number on a given integer array?
*/
const generateArray = (length = 100) => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(i);
  }
  return result;
};

const getRandomIndex = (length = 100) => {
  return Math.floor(Math.random() * length);
};

const findDuplicateNumber = arr => {
  const arrSum = arr.reduce((acum, el) => acum + el, 0);
  const totalSum = generateArray().reduce((acum, el) => acum + el, 0);
  return arrSum - totalSum;
};

const ranIndex = getRandomIndex();
const arrayNumbers = generateArray();
const testArray = [
  ...arrayNumbers.slice(0, ranIndex),
  ...arrayNumbers.slice(ranIndex - 1)
];
console.log(ranIndex);
console.log(testArray.join(', '));
console.log(findDuplicateNumber(testArray));
