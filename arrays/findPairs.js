/*
    How do you find all pairs of an integer array whose sum is equal to a given number? 
*/

const generateRandomArray = (length = 100) => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(Math.floor(Math.random() * length));
  }
  return result;
};

const binarySearch = (goal, numberList) => {
  let lo = 0;
  let hi = numberList.length - 1;
  let mid;
  while (lo <= hi) {
    mid = Math.ceil((lo + hi - 1) / 2);

    if (goal === numberList[mid]) {
      return true;
    } else if (goal < numberList[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return false;
};

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

const numberList = generateRandomArray(25);
numberList.sort((a, b) => a - b);
console.log('start');
console.log(findSumPairs(numberList, 18));
