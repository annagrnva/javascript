// Скопировать и отсортировать массив

// У нас есть массив строк arr. Нужно получить отсортированную копию, 
// но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)



let arr = ["HTML", "JavaScript", "CSS"];
    
function copySorted(arrNew) {
    const splicedArr = arrNew.slice();
    
    splicedArr.sort()
    return splicedArr
}
    
let sorted = copySorted(arr);

console.log('Изначальный', arr ); // HTML, JavaScript, CSS (без изменений)
console.log('Отсортированный', sorted ); // CSS, HTML, JavaScript

