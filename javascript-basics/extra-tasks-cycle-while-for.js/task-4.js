// Посчитать (и вывести) сколько четных и нечетных чисел 
// в промежутке от 1 до 100. 
// Решить задачу с помощью for


let count = 0;
let uncount = 0

for (let i = 0; i < 9; i++) {
    if (i % 2 === 0) {
       count += 1;
    } else {
        uncount += 1;
    }
};
console.log(count);
console.log(uncount);