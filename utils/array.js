exports.generateArray = (length = 100) => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(i);
  }
  return result;
};

exports.getRandomIndex = (length = 100) => {
  return Math.floor(Math.random() * length);
};

exports.createDuplicateArray = (array, i) => {
  return [...array.slice(0, i), ...array.slice(i - 1)];
};

exports.shuffle = (array) => {
  const arrayShuffled = [...array].sort(() => Math.random() - 0.5);
  return arrayShuffled;
};

exports.binarySearch = (goal, numberList) => {
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

exports.generateRandomArray = (length) => {
  return this.shuffle(this.generateArray(length));
};
