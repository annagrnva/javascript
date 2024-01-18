let x = prompt('введите значение x', '');
let n = prompt('введите значение n', '');


function pow(x, n) {

   let result = x; 
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

if (n >=1 && n % 1 == 0) {
    alert (pow(x, n));
} else {
    alert ('не поддерживается')
}