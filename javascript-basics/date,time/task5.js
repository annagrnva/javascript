// Сколько сегодня прошло секунд?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let dateNow = new Date();
    let dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        
    console.log(dateToday)

    
    return Math.round( (dateNow - dateToday) / 1000 )
}

console.log(getSecondsToday())


function getSecondsToday() {
    let dateNow = new Date();
    let dateTommorow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1) ;
    
    
    console.log(dateTommorow)

    
    return Math.round( (dateTommorow - dateNow) / 1000 )
}

console.log(getSecondsToday())