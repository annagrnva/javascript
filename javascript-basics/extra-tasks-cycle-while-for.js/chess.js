// Напишите программу, создающую строку, содержащую решётку 8х8. На каждой позиции
// либо пробел, либо #. В результате должна получиться шахматная доска.



let grid = '#';
let size = 8;
let result = '';

for (let i = 1; i <= size; i++) {

    for (let j = 1; j <= size; j++) {

        if ( (j + i) % 2 === 0) {

            result += grid;

        } else {

            result += ' ';
        }
    };
    result += '\n';
};

console.log(result);