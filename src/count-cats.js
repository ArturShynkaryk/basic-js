const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let total = 0;
  let cat = '^^';
  let str = matrix.join(',');
  let newMatr = str.split(',');
  for (let i = 0; i <= newMatr.length; i++) {
    if (newMatr[i] === cat) {
      total += 1;
    }
  }
  return total;
}

module.exports = {
  countCats,
};
