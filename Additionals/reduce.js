// Дано масив користувачів, потрібно погрупувати їх за технологіями якими вони володіють
// const list = [
//   { name: 'Vika', course: 'REACT' },
//   { name: 'Viktoria', course: 'JS' },
//   { name: 'Maks', course: 'REACT' },
//   { name: 'Tamara', course: 'JAVA' },
//   { name: 'Volodymyr', course: 'JS' },
//   { name: 'Maks', course: 'JS' },
//   { name: 'Alina', course: 'REACT' },
//   { name: 'Olena', course: 'JS' },
//   { name: 'Dima', course: 'JAVA' }
// ];
//
// Вихідний обєкт має виглядати так :
// const result = {
//   REACT: [
//     { name: 'Vika', course: 'REACT' },
//     { name: 'Maks', course: 'REACT' },
//     { name: 'Alina', course: 'REACT' }
//   ],
//   JS: [
//     { name: 'Viktoria', course: 'JS' },
//     { name: 'Volodymyr', course: 'JS' },
//     { name: 'Maks', course: 'JS' },
//     { name: 'Olena', course: 'JS' }
//   ],
//   JAVA: [
//     { name: 'Tamara', course: 'JAVA' },
//     { name: 'Dima', course: 'JAVA' }
//   ]
// }

const list = [
  { name: 'Vika', course: 'REACT' },
  { name: 'Viktoria', course: 'JS' },
  { name: 'Maks', course: 'REACT' },
  { name: 'Tamara', course: 'JAVA' },
  { name: 'Volodymyr', course: 'JS' },
  { name: 'Maks', course: 'JS' },
  { name: 'Alina', course: 'REACT' },
  { name: 'Olena', course: 'JS' },
  { name: 'Dima', course: 'JAVA' }
];

const newList = list.reduce((acc, user) => {
  if (!acc[user.course]) {
    acc[user.course] = [];
  }
  acc[user.course].push(user);

  return acc;
}, {});

console.log(newList);
