// Напишите функцию которая принимает массив и возвращает его “перевернутым”
// Пример:
// reverseFunc([2,4,6,8,10]) // возвращает [10,8,6,4,2]

// function reverseFunc() {

//     let numbers = [2, 4, 6, 8, 10]
//     numbers.reverse()

//     return numbers
// }
// console.log(reverseFunc())

function reverseFunc(arr) {

    let nums = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        
        nums.push(arr[i])
        
    };
    
    return nums
}

console.log(reverseFunc([2, 4, 6, 8, 10]))


/ [3,5,7,12,15,100,23,55,2,5,1]
// напиши функцию, которая вернет массив элементов которые меньше 20 
// [3,5,7,12,15,2,5,1]



function myFunc(arr) {
    
    let nums = [];
    
    for (let i = 0; i <= arr.length; i++) {
        
        if (arr[i] < 20) {
            nums.push(arr[i])
        }
    }
    
    return nums;
}

console.log(myFunc([3,5,7,12,15,100,23,55,2,5,1]))

// Найти самый часто встречающийся элемент в массиве:
    
// Напишите функцию которая принмает массив и возвращает самый часто   
// встречающийся элемент в этом массиве.
    
// Пример:
// `findElemFunc([2,4,4,8,8,10,10,10]) 
// возвращает 10, потому что 10 встречается 3 раза` 
// Подсказка: для подсчета количества сколько раз
// встречатся элемент в массиве надо использовать объект

function findElemFunc(arr) {
    let result;
    let obj = {};
   
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
           obj[arr[i]] += 1;
        } else {
           obj[arr[i]] = 1;
        }
    }
    
    // {
    //  'vanya': 1,
    //  'ilya: 2,
    //  'martin': 1,
    //  'anya: 3
    // }
    
    let max = 0;
    
    for (key in obj) {
        
       if (obj[key] > max) {
           max = obj[key];
           result = key;
       }
       
    }
    
    return result;
   }
   
   console.log(findElemFunc(['anya','anya','anya','ilya','ilya','vanya', 'martin']))

   // 1. вернуть число, сделать переменную
// 2. сделать цикл от 0 до конца массива
// 3. сделаить объект для подчета чисел
// 4. циклом for in перебрать числа
// 5. перебранное число вернуть в переменную