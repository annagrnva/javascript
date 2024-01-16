let age = prompt('сколько вам лет', 18);

function checkAge(age) {
    return (age >= 18) ? true : confirm ('родиели разрешили')
}


if (checkAge(age)) {
    alert('доступ разрешен');
} else {
    alert('доступ запрещен');
}