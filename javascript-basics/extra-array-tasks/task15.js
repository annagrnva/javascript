// Дан массив строк. Создай новый массив, в котором будут только строки, 
// содержащие определённую подстроку.


// const findString = ‘ap’
// const fruits = ['apple', 'banana', 'grape', 'orange', 'pineapple'];

// const filteredFruits = …твой код

// console.log(filteredFruits); // Выведет: ['apple', 'grape', 'pineapple']


// Примечание к этой задаче .includes() так же работает к строкам так же как 
// и к массивам

let findString = 'ap';
let fruits = ['apple', 'banana', 'grape', 'orange', 'pineapple'];

let filteredFruits = fruits.filter(item => item.includes(findString))

console.log(filteredFruits)