// Есть два объекта

// const objectOne = {
// name: 'Grisha',
// age: 25,
// city: 'SaintPi'
// }

// const ObjectTwo = {
// name: 'Grisha',
// age: 10,
// city: 'Saransk'
// }

// Напишите функцию которые найдет и выведет поля которые **различаются.** 
// Название ключей и их значение может быть разное.
// Пример:
// compareFunc(objectOne, ObjectTwo)
// //age,city


const objectOne = {
    name: 'Grisha',
    age: 25,
    city: 'SaintPi'
};

const objectTwo = {
    name: 'Grisha',
    age: 10,
    city: 'Saransk'
};

function compareFunc(objectOne, objectTwo) {

    for (let key in objectOne, objectTwo) {

        if (objectOne[key] !== objectTwo[key]) {
            console.log(key)
        };
    };

};

compareFunc(objectOne, objectTwo)