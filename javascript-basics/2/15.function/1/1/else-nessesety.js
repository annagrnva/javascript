function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('родителт разрешили?');
    }
}

let age = prompt('сколько вам лет', 18);

if (checkAge(age)) {
    alert('доступ открыт');
} else {
    alert('доступ закрыт');
}