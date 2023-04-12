const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let mounth = date.toString().split(' ');
  let season = 'Unable to determine the time of year!';
  switch (mounth[1]) {
    case 'Dec':
    case 'Jan':
    case 'Feb':
      season = 'winter';
      break;
    case 'Mar':
    case 'Apr':
    case 'May':
      season = 'spring';
      break;
    case 'Jun':
    case 'Jul':
    case 'Aug':
      season = 'summer';
      break;
    case 'Sep':
    case 'Oct':
    case 'Nov':
      season = 'fall';
      break;
    default:
      season = 'Invalid date!';
      break;
  }
  return season;
}

module.exports = {
  getSeason,
};
