// // Есть два объекта

// // const objectOne = {
// // name: 'Grisha',
// // age: 25,
// // city: 'SaintPi'
// // }

// // const ObjectTwo = {
// // name: 'Grisha',
// // age: 10,
// // city: 'Saransk'
// // }

// // Напишите функцию которые найдет и выведет поля которые **различаются.** 
// // Название ключей и их значение может быть разное.
// // Пример:
// // compareFunc(objectOne, ObjectTwo)
// // //age,city


// const objectOne = {
//     name: 'Grisha',
//     age: 25,
//     city: 'SaintPi'
// };

// const objectTwo = {
//     name: 'Grisha',
//     age: 10,
//     city: 'Saransk'
// };

// function compareFunc(objectOne, objectTwo) {

//     for (let key in objectOne, objectTwo) {

//         if (objectOne[key] !== objectTwo[key]) {
//             console.log(key)
//         };
//     };

// };

// compareFunc(objectOne, objectTwo)



// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
// };

// let salaries_another = {
//   "John": 10,
//   "Pete": 30,
//   "Mary": 25,
// };


// function sumSalaries(salaries) {
//     let sum = 0;

//     for (let key in salaries) {
//         const value = salaries[key];

//         sum += value
//     }

//     return sum;
// }

// console.log( sumSalaries(salaries) )

// console.log( sumSalaries(salaries_another) )



// // Напишите фукнцию sumAndHistory, которая будет складывать два числа и запоминать выполнение
// // всех операций

// // Пример:


// // const history = {}
// // sumAndHistory(1,2);

// // console.log(history) 
// // // {
// // //     1: 3
// // // }
// // sumAndHistory(10,20);
// // console.log(history) 
// // // {
// // //    1: 3,
// // //    2: 30
// // // }

// // const obj = { 
// //    age: 25
// // }
// // Object.keys(obj) // ['age']
// // Object.keys(obj).length // 1

// const history = {};

// function sumAndHistory(num1, num2) {
//     let sum = num1 + num2;

//     let order = Object.keys(history).length;

//     history[order + 1] = sum;
// }

// sumAndHistory(1,2)
// console.log(history)
// sumAndHistory(5,5)
// console.log(history)
// sumAndHistory(10,10)
// console.log(history)
// sumAndHistory(7,3)
// console.log(history)


// let user = {}
// user.name = 'Jhon',
//     user.surname = 'Smith',

//     // user.name = 'Pete',
//     // delete user.name;
// console.log(user)




// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let schedule = {};
// schedule.time = 'get up'
// function isEmpty(obj) {

//    for (key in obj) {
//       if (isEmpty[key]) {
//          return false
//       } {
//          return true
//       }
//    }
// }
// console.log(isEmpty(schedule));




// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат
//  в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
// }

// let sum = 0;

// function isSalary() {

//    for (let key in salaries) {

//       sum += salaries[key]

//    }
//    return sum
// }
// console.log(isSalary(sum))




// Создайте функцию multiplyNumeric(obj), которая умножает 
// все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего 
// возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};

function multiplyNumeric(obj) {

   for (let key in obj) {

      if (typeof obj[key] ==='number') {
         obj[key] *= 2
      }
   }
}
console.log(multiplyNumeric(menu))