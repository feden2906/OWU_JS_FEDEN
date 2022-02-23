// Написати секундомір який буде рахувати години, хвилини та секунди до заданого часу.
// В консолі повинні мати такий результат:
// 00 : 00 : 00
// 00 : 00 : 01
// 00 : 00 : 02
// 00 : 00 : 03
// ...

const helper = (num) => num.toString().length < 2 ? '0' + num : num;

const stopwatch = (hourOut, minOut, secOut) => {
  for (let hour = 0; hour <= hourOut; hour++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        console.log(`${helper(hour)} : ${helper(min)} : ${helper(sec)}`);
        if (hour === hourOut && min === minOut && sec === secOut) return;
      }
    }
  }
};

stopwatch(0, 0, 7);

