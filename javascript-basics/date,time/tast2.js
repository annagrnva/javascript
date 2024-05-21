// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: 
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».


// let date = new Date();

// let arr = ['ПН', 'ВТ', "СР", "ЧТ", "ПТ", "СБ", "ВС"]

// function getWeekDay(date) {

//     // let daysWeek = date.getDay()
//     // let daysArr = arr[daysWeek]
//     // console.log(daysWeek)
//     // console.log(daysArr)

//     return arr[date.getDay()]
// }

// console.log( getWeekDay(date) ); // нужно вывести "ВТ"

let date = new Date();

let obj = {
   1: 'ПН', 
   2: 'ВТ', 
   3: "СР", 
   4: "ЧТ",
   5: "ПТ", 
   6: "СБ",
   7: "ВС",
}

function getWeekDay(date) {

    return obj[date.getDay()]

}

console.log( getWeekDay(date) ); // нужно вывести "ВТ"