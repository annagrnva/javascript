let x = prompt('введите значение x', '');
let n = prompt('введите значение n', '');
let result = pow(x, n);

function pow(x, n) {
    return x ** n;
}
alert(result);