// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
    let lowerStr = str.toLowerCase()

    if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
        return true;
    } else {
        return false;
    }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

