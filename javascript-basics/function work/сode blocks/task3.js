// Сортировать по полю

// У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];
// Обычный способ был бы таким:

// // по имени (Анна, Иван, Пётр)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

function byField(fieldName) {

  return function (a, b) {
    if (a[fieldName] > b[fieldName]) {

      return 1;
    }
    return -1

  }
}
let sortedUsersNames = users.sort(byField('name'));
let sortedUsersAge = users.sort(byField('age'));
let sortedUsersSurname = users.sort(byField('surname'));


console.log(sortedUsersNames)
console.log(sortedUsersAge)
console.log(sortedUsersSurname)

