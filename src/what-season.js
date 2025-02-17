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
// function getSeason(date) {
//   let mounth = date.toString().split(' ');
//   let season = 'Unable to determine the time of year!';
//   switch (mounth[1]) {
//     case 'Dec':
//     case 'Jan':
//     case 'Feb':
//       season = 'winter';
//       break;
//     case 'Mar':
//     case 'Apr':
//     case 'May':
//       season = 'spring';
//       break;
//     case 'Jun':
//     case 'Jul':
//     case 'Aug':
//       season = 'summer';
//       break;
//     case 'Sep':
//     case 'Oct':
//     case 'Nov':
//       season = 'fall';
//       break;
//     default:
//       season = 'Invalid date!';
//       break;
//   }
//   return season;
// }

// function getSeason(date) {
//     const dateObject = new Date(date);

// if(dateObject.toString() === 'Invalid Date') {
//     console.log('Invalid date string');
// } else {
//     console.log('Valid date string');
// }

//   let timestamp = Date.parse(date);
//   if (isNaN(timestamp)) {
//     let season = 'Unable to determine the time of year!';
//     console.log('Invalid date format');
//   } else {
//     console.log('Valid date format');
//     let mounth = date.toString().split(' ');

//     switch (mounth[1]) {
//       case 'Dec':
//       case 'Jan':
//       case 'Feb':
//         season = 'winter';
//         break;
//       case 'Mar':
//       case 'Apr':
//       case 'May':
//         season = 'spring';
//         break;
//       case 'Jun':
//       case 'Jul':
//       case 'Aug':
//         season = 'summer';
//         break;
//       case 'Sep':
//       case 'Oct':
//       case 'Nov':
//         season = 'fall';
//         break;
//       default:
//         season = 'Invalid date!';
//         break;
//     }
//     return season;
//   }
// }

function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  const timestamp = Date.parse(date);
  if (isNaN(timestamp) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  switch (month) {
    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'fall';
    default:
      throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
