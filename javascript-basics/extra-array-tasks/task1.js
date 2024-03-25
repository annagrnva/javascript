// Напишите функцию которая принимает массив и возвращает его “перевернутым”
// Пример:
// reverseFunc([2,4,6,8,10]) // возвращает [10,8,6,4,2]

function reverseFunc() {

    let numbers = [2, 4, 6, 8, 10]
    numbers.reverse()
   
    return numbers
}
console.log(reverseFunc())