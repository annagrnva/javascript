// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?

function makeUser() {
    return {
        name: 'Jhon',
        ref:this
    };
}

let user = makeUser();

console.log(user.ref.name);

