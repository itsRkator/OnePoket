const getArraySum = (numArray) => {
  return numArray.reduce((sum, num) => sum + num, 0);
};

const numArray = [1, 2, 3, 4, 5, 6, 7];
console.log(getArraySum(numArray));

module.exports = { getArraySum };
