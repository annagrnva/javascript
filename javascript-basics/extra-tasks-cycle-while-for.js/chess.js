// Напишите программу, создающую строку, содержащую решётку 8х8. На каждой позиции
// либо пробел, либо #. В результате должна получиться шахматная доска.


// let grid = "#";
// let result = '';
// let result1 = ' ';

// for (let i = 1; i <= 8; i++) {

//     if (i % 2 === 0) {

//         result += grid + " ";
//     } else {
//         result1 += " " + grid;
//     }
// }

// console.log(result);
// console.log(result1);
// console.log(result);
// console.log(result1);
// console.log(result);
// console.log(result1);

let grid = '#';
let result = '';

for (let i = 1; i <= 8; i++) {

    for (let j = 1; j <= 8; j++) {

        if (j % 2 === 0) {

            result += grid + ' ';

        } else if (j % 2 === 0) {

            result += ' ' + grid;
        }
    };
    result += '\n';
};

console.log(result);