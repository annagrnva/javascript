// Напишите функцию camelize(str), которая преобразует строки 
// вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают 
// заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку 
// на массив символов, потом переделайте всё как нужно и 
// методом join соедините обратно.

// Напишите функцию camelize(str), которая преобразует строки
// вида «my-short-string» в «myShortString».


// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// const test_string = 'anya,love,js';
// console.log(test_string);
// const test_split_string = 'anya,love,js'.split(',')
// console.log(test_split_string);


function camelize(str) {
    //             ['background', 'color'];
    const result = str.split('-').map((item, index) => {
      const firstUpperLetter = item.slice(0,1).toUpperCase()
      const newWord = firstUpperLetter + item.slice(1)
            
        if (index === 0) {
            return item
        } 
        
      return newWord
    })
    .join('')
  
    
    return result
}


console.log(camelize("anya-love-js")) // backgroundColor


// const test_arr = ['anya', 'love', 'js']

// const new_test_arr = test_arr.map((item, index) => {
//     console.log('item = ', item, 'index = ', index);
// })



// const test_string = 'anya-love-js';

// const test_slice = test_string.slice(2,4);
// console.log(test_slice);

// const test_string_first = test_string[0];

// console.log(test_string_first)

// console.log('B' + 'love' + 'js')


// console.log("-anya-love-js".split('-'))

