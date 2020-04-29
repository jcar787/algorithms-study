const _swap = (char1, char2) => {
  return [char2, char1];
};
const _reverseWithRecursion = (arrayChars, i, j) => {
  if (i < j) {
    [arrayChars[i], arrayChars[j]] = _swap(arrayChars[i], arrayChars[j]);
    _reverseWithRecursion(arrayChars, i + 1, j - 1);
  }
  return arrayChars.join('');
};

exports.reverseNoRecursion = (string) => string.split('').reverse().join('');
exports.reverseWithStack = (string) => {
  const stack = [];
  let reversedString = '';
  for (const char of string) {
    stack.push(char);
  }
  while (stack.length !== 0) {
    reversedString += stack.pop();
  }

  return reversedString;
};
exports.reverseWithRecursion = (string) =>
  _reverseWithRecursion(string.split(''), 0, string.length - 1);
