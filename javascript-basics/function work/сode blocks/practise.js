// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];

// }
// console.log(sum)

// function sayHi(phrase, who) {
// console.log(phrase + ',' + who)
// }

// let timerId = setTimeout((sayHi),2000, 'hi', 'Alice')
// let timerId2 = setTimeout((sayHi),4000, 'hi', 'Mike')

// console.log(timerId)
// console.log(timerId2)


// clearTimeout(timerId)

// function sayBy(num) {
//     console.log(num)

//     if (num <=5) {
//         let timerIn = setInterval((sayBy), 2000, ++num)
//         console.log(timerIn)
//         clearInterval(timerIn)
// }
//     }
// sayBy()

// function sayHi() {
//     // console.log(this.name);
// console.log({name});

//   }

//   let user = { name: "John" };
//   let admin = { name: "Admin" };

//   // используем 'call' для передачи различных объектов в качестве 'this'
//   sayHi( user ); // John
//   sayHi( admin ); // Admin

// let year = 10;

// if(year == 11) {
//     console.log('true')
// } else {
//     console.log('false')
// }


// let num = -2;

// if(num > 0) {
//     console.log('1')
// } else {
//  console.log('-1')
// }
// function myFunc() {
//     let a = 7;
//     let b = 5;

//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }
// console.log(myFunc())

// class User {
//     constructor(name) {
//         this.name = name;
//     }

// //     sayHi() {
// //         console.log(this.name);
// //     }
// }

// let user = new User('ivan');
// // user.sayHi()
// console.log(user)

document.body.style.background = 'red'; // сделать фон красным

setTimeout(() => document.body.style.background = '', 3000); // вернуть назад