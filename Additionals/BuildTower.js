// Build Tower
//
// Build Tower by the following given argument:number of floors (integer and always greater than 0).
// for example, a tower of 3 floors looks like below
//     [
//         '  *  ',
//         ' *** ',
//         '*****'
//     ]
//
// and a tower of 6 floors looks like below
//     [
//         '     *     ',
//         '    ***    ',
//         '   *****   ',
//         '  *******  ',
//         ' ********* ',
//         '***********'
//     ]

// variant 1
// const builder = (count) => {
//   const array = [];
//   recursive(count, array);
//   return array;
// };
//
// const recursive = (count, array) => {
//   array.unshift(' '.repeat(array.length) + '*'.repeat(count * 2 - 1) + ' '.repeat(array.length));
//   if (--count) recursive(count, array);
// }
//
// console.log(builder(7));


// variant 2
const builder = (x) => [...Array(x)].map((_, i) => ' '.repeat(x - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(x - i - 1));

console.log(builder(7));
