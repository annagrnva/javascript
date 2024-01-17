let a = prompt('введите значение а', '');
let b = prompt('введите значение b', '');
let result = min(a, b);

function min(a, b) {

    if (a < b) {
        return a
    } else {
        return b
    }
}
alert(result);