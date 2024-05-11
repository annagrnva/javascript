// Анаграммы – это слова, у которых те же буквы в том же количестве, 
// но они располагаются в другом порядке.

// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// 0. создаем хранилище - new Map()
// 1. перебираем входящий массив (arr) с помощью forEach()
// 2. в этом цикле (forEach) из элемента-строки -> элемент-массив (Array.from)
// 3. сортируем этот элемент-массив из второго пункта (.sort())
// 4. сделаем из элемента-массив из 4 пункта строку (.join()) для того что бы записать в хранилище
// 5. проверяем есть ли в нашем хранилище уже такой ключ. (.has())
// 6.1 Если есть - то пропускаем
// 6.2 Если нет - то записываем в наше храналище из 0 пункта. (.set({key: value}))
// Где ключ - это строка из 4 пункта, а значение это элемент входящего-массива
// 7. вернуть из фукнции массив, сделать из хранилище (0 пункт) массив

// {
// 'aer': 'era',
// 'apn': 'nap'
// }

// if (!map.has(ключ)) {
//   
// }

// Array.from('ear') // ['e', 'a', 'r'].sort() ['e', 'r', 'a'].sort() -> ['a', 'e', 'r'] -> 'aer'
// Например:

let words = ["ear", "era", "nap"] // "nap", "teachers", "cheaters", "PAN", "hectares"];

function aclean(arr) {

    let result = new Map();

    arr.forEach((item, index) => {
        let resultArr = Array.from(item);
        let sortArr = resultArr.sort().join("")
        // console.log(sortArr)

        if (!result.has(sortArr)) {
            result.set(sortArr, resultArr)
        } else { }
    });
    return result;
}

console.log(aclean(words)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.