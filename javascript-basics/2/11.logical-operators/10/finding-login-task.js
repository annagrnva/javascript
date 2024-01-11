let login = prompt('кто там?', '');


if (login == 'админ') {

    let password = prompt('пароль', '');

    if (password === 'я главный') {

        alert('здравствуйте!');

    } else if (password === '' || password === null) {

        alert('отмена');

    } else {

        alert('неверный пароль');
    }

} else if (login === '' || login === null) {

    alert('отмена');
} else {

    alert('я вас не знаю');
}