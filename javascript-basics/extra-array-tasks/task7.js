// Напишите функцию camelize(str), которая преобразует строки вида 
// «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
// потом переделайте всё как нужно и методом join соедините обратно.


//1. написать функцию camelize
//2. задать переменную stringSplit с методом split, чтобы разделить строку на массив 

//4. пройти циклом по массиву
//5. если перед значением есть '-', то добавить регистр toUpperCase, если нет - пропустить
//6. задать переменную strinJoin с методом join, чтобы соединить массив в строку
//7. функция возвращает строку



// function camelize(str) {

// let stringSplit = str.split("-");
// let stringUpper = stringSplit[0] + stringSplit[1].toUpperCase()
// let stringSplit1 = stringSplit[1].split('')

// // let result = stringUpper.map((index => index[0]))
// console.log(stringSplit) //[ 'background', 'color' ]
// console.log(stringUpper) //backgroundCOLOR
// console.log(stringSplit1) //[ 'c', 'o', 'l', 'o', 'r' ]

// // console.log(result)
// }

// console.log(camelize("background-color"))

function camelize(str) {

    let stringSplit = str.split("-"); // [ 'background', 'color' ]
    const newArray = stringSplit.map((item, index) => {
        if (index !== 0) {
            return item[0].toUpperCase() + item.slice(1);
        } 
        
        return item;    
    })
    
    console.log(newArray);
    
    let stringJoin = newArray.join('');
    return stringJoin
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))