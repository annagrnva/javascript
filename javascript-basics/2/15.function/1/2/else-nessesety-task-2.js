function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    return confirm('родители разрешили?');
}

let age = prompt('сколько вам лет', 18);

if (checkAge(age)) {
    alert('доступ открыт');
} else {
    alert('достур закрыт');
}