// Build Tower
//
// Build Tower by the following given argument:number of floors (integer and always greater than 0).
// for example, a tower of 3 floors looks like below
//     [
//     '  *  ',
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

const builder = (count) => {
  const array = [];
  recursive(count, array);
  return array;
};

const recursive = (count, array) => {
  array.unshift(' '.repeat(array.length) + '*'.repeat(count * 2 - 1) + ' '.repeat(array.length));
  if (--count) recursive(count, array);
}

console.log(builder(7));
