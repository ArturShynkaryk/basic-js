const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {
//   const str = n.toString();
//   let maxNum = 0;

//   for (let i = 0; i < str.length; i++) {
//     let numStr = '';
//     for (let j = 0; j < str.length; j++) {
//       if (j !== i) {
//         numStr += str[j];
//       }
//     }
//     let num = parseInt(numStr);
//     if (num > maxNum) {
//       maxNum = num;
//     }
//   }

//   return maxNum;
// }

function deleteDigit(n) {
  let max = 0;
  const dig = n.toString().split('');
  for (let i = 0; i < dig.length; i++) {
    const del = dig.splice(i, 1)[0];
    const num = parseInt(dig.join(''), 10);
    if (num > max || max === null) {
      max = num;
    }
    dig.splice(i, 0, del);
  }
  return max;
}

module.exports = {
  deleteDigit,
};
