// Напишите функцию которая оставит в массиве только уникальные значения:
// пример: 
// uniqueItems(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])
// //возвращает ['kiwi', 'apple', 'orange']

//1. создать функцию uniqueItems
//2. создать массив items для вложения значений
//3. пройтись циклом по массиву, который выделит только уникальные значения
//4. если значение уже есть в массиве, то пропустить его, если нет, то добавить
//5. функция возращает массив

function uniqueItems(arr) {
    let items = [];

    for (let key in arr) {
        if (!items.includes(arr[key])) {
            items.push(arr[key])
        }

        return items
    }
}
console.log(uniqueItems(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']))
