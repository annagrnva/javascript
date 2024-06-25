// Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
// начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
  
//    let timerId =  setInterval(() => console.log(from),1000, from++) 
//    if(from == to) {
//        clearInterval(timerId)
//     }
// }

// console.log(printNumbers(1, 5))

function printNumbers (from, to) {

let timerId = setInterval(() => {
    console.log(from++);
 if (from > to) {
    clearInterval(timerId);}
}, 1000);
}
printNumbers(5,10)