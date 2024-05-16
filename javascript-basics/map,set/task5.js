// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

  let sum = Object.values(obj).reduce((acc, item) => {
    acc += item
}, 0)



let user = {
    name: 'John',
    age: 30
  };
  
  function count(obj) {
      let result = Object.keys(obj).length
      return result;
  }
  
  console.log( count(user) ); // 2