// Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

 let arr = [5, 3, 8, 1];

console.log('ДО', arr); // [5, 3, 8, 1];

function filterRange(a,b) {
    
    arr.forEach(function(item, index) {
        if ( !(item >= a && item <= b) ) {
            
          arr.splice(index, 1); // удаляет 1 индекс, с 1 значения        
            
        }
    })


}

filterRange(1, 4); // удалены числа вне диапазона 1..4

console.log('ПОСЛЕ', arr); // [3, 1]