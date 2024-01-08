let login = prompt ( 'введите логин', '' )
let message =  (login == 'Сотрудник') ? 'Привет' :
(login =='Директор') ? 'Здравствуйте' :
(login =='') ? 'Нет логина':
'';

alert (message);
