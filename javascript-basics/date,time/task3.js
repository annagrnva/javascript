// Какой день месяца был много дней назад?

// Создайте функцию getDateAgo(date, days),
// возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, 
// то getDateAgo(new Date(), 1) вернёт девятнадцатое и
// getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 
// и больших значениях:
// let date = new Date();
//                     //21.05-2=19.05
// function getDateAgo(date, days) {
//     date.setDate(date.getDate() - days);
//     return date.getDate();

// }

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) );


let date = new Date();
                    //21.05-2=19.05
function getDateAgo(date, days) {
    const cloneDate = new Date(date);
        
    // console.log(cloneDate)
    cloneDate.setDate(cloneDate.getDate() - days);
    // console.log(cloneDate)
    
    return cloneDate.getDate();
}

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) );
