// Посчитать (и вывести) сколько раз надо поделить 
// число N на 2 что бы оно оказалось меньше 1.
// Решить задачу с помощью for.        




let num = 10;
let count = 0;
for (let i = 0; num >= 1; i++) {
    num = num / 2;
    count += 1;
}

console.log("count", count);
