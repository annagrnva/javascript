let user = {
    name1: 'Jhon',
    surname: 'Smith',
    name2: 'Pete',
};

let key = prompt('что вы хотите знать о пользователе', '')
delete user.name1;
alert(user[key]);