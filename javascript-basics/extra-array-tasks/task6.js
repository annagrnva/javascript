// Напишите функцию которая принимает два массива и находит отличающиеся значения:
// пример: 
// uniqueArrItems([’kiwi’, ’banana’ , 4, 10], [’orange’, ’banana’ , 7, 10])
//возвращает строку ‘orange,7’ 


//1. создать массив firstArr
//2. создать массив secondArr
//3. создать переменную result для вложения значений
//4. создать функцию uniqueArrItems
//5. пройтись циклом по массиву, который выделит различные значения в массиве
//6. если значение в массиве firstArr не равны знаениям в secondArr, то добавить, если нет, то пропустить
//7. функция возращает значения


let firstArr = ["kiwi", 'banana', 4, 10];
let secondArr = ['orange', 'banana', 7, 10];
let result = '';

function uniqueArrItems(arr) {

    for (let key in arr) {
        if (!firstArr.arr[key] === secondArr.arr[key]) {
            result.push(secondArr.arr[key])

        }
        return result
    }
}
console.log(uniqueArrItems())