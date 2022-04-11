//  Дано масив, потрібно з нього зібрати об'єкт спираючить на його батьківський об'єкт
// const inputDataArray = [
//   { parentName: null, itemName: 'programming' }, { parentName: 'mobile', itemName: 'ios' },
//   { parentName: 'mobile', itemName: 'android' }, { parentName: 'backend', itemName: 'nodejs' },
//   { parentName: 'frontend', itemName: 'angular' }, { parentName: 'frontend', itemName: 'react' },
//   { parentName: 'programming', itemName: 'web' }, { parentName: 'frontend', itemName: 'vue' },
//   { parentName: 'backend', itemName: 'nodejs' }, { parentName: 'web', itemName: 'backend' },
//   { parentName: 'programming', itemName: 'mobile' }, { parentName: 'web', itemName: 'frontend' }
// ];
//
// Вихідний обєкт має виглядати так :
// const result = {
//   "programming": {
//     "web": {
//       "backend": {
//         "nodejs": {}
//       },
//       "frontend": {
//         "angular": {},
//         "react": {},
//         "vue": {}
//       }
//     },
//     "mobile": {
//       "ios": {},
//       "android": {}
//     }
//   }
// }

