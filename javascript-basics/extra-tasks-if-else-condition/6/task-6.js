// Напишите программу, которая рассчитывает скидку в зависимости от суммы покупки.
// 10% - меньше 100р
// 20% - больше 100р но меньше 500р
// 30% - больше 500р

// Данное:
// const purchaseAmount = 120 // заданное число
//  let discount; //сюда записать ответ который мы выведем в консоли

// Результат:
//  console.log("Скидка: ", discount) // Скидка: 20%



let purchaseAmount = prompt('введите сумму в рублях', '');
let discount;

if (purchaseAmount <= 100) {
    discount = 10 + '%';
} else if (purchaseAmount >= 101 && purchaseAmount <= 500) {
    discount = 20 + '%';
} else if (purchaseAmount >= 501) {
    discount = 30 + '%';
}

alert("Скидка: " +discount )
