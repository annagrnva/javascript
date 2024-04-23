// У вас есть массив объектов user, и у каждого из объектов 
// есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов 
// с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. 
// Попробуйте использовать =>. Это небольшая уловка.


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => {
    
    return {
        fullName: item.name + ' ' + item.surname,
        id: item.id
    }
});

// let usersMapped = users.map(item => item.id);


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин


// Напишите функцию sortByAge(users), которая принимает массив объектов
// со свойством age и сортирует их по нему.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// теперь: [vasya, masha, petya]



function sortByAge() {
    
    arr.sort((a, b) => a.age - b.age)
    
}

console.log(arr);

sortByAge();

console.log(arr);


// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов
// со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge() {
  let users = arr.reduce((sum, current) => sum + current.age, 0) / arr.length
   
   return users
}
console.log(getAverageAge())

/ Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, 
// содержащий только уникальные элементы arr.

// Например:
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  let result = [];
  
  arr.forEach((item, index) => {
  
      if (!result.includes(item))  {
        result.push(item) 
      }
      
  })
  
  return result;
}


console.log(unique(strings));
// alert( unique(strings) ); // кришна, харе, :-O
