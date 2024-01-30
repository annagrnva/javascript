// function myFunc(number) {

//     if (number > 0) {
//         return 'положительное';
//     }

//     if (number < 0) {
//        return 'отрицательное';
//     }

//     if (number === 0) {
//        return 'ноль';
//     }
// }

// let result = myFunc(1);
// let result2 = myFunc(-1);
// let result3 = myFunc(0);

// console.log(result);
// console.log(result2);
// console.log(result3);


function myFunc(number) {
    for (let i = 1; i <= 10; i++) {

        if (number * i <= 10) {
            console.log(i * number);

        }
    }


}
myFunc(5);


