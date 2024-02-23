// Напишите программу, определяющую большее из двух чисел.
// Данное:
// const  number1 = 5 // заданное число
//  const  number2 = 10 // заданное число

// Результат:
// ”Это число 2 больше чем число 1”

// Variant 1

// let number1 = 5;
// let number2 = 10;

// if (number1 <= number2) {
//     console.log('Это число 2 больше чем число 1')
// }


// Variant 2

let number1 = prompt('введите число №1');
let number2 = prompt('введите число №2');
let result;
if (number1 <= number2) {
    result = 'Это число 2 больше чем число 1'
} else  {
    result = 'Попробуй еще раз'
}

alert(result)
