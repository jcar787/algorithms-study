const { getRandomIndex } = require('./array');
exports.generateRandomChar = () => {
  return String.fromCharCode(getRandomIndex(26) + 65);
};
exports.generateRandomString = (length = 100) => {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += this.generateRandomChar();
  }
  return newString;
};
