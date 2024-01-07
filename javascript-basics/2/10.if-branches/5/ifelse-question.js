let login = prompt ( 'введите логин', '' )
let message;

login == 'Сотрудник' ? message ='Привет' :
login == 'Директор' ? message ='Здравствуйте' :
login == '' ? message ='Нет логина':
alert (message);
