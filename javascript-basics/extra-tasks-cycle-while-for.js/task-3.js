// Вычислить сумму (и вывести) всех цифр в промежутке 
// от  1 до N. N - динамичная переменная
// Решить задачу с помощью for

// let sum = 0;
// for (let i = 0; i <= 6; i++) {
//    sum += i;
// };
// console.log(sum);



// Напишите программу, которая посчитает и выведет 
// сумму каждого пятого числа в промежутке от 0 до 100.


let sum = 0;
for (let i = 0; i <= 100; i++) {
   if ( i % 5 === 0) {
      sum += i;
   }
   
};
console.log(sum);