let str = "hi";
str.test = 5;

console.log(str.test);

// Можно ли добавить свойство строке?
// Особенные примитивы null и undefined являются исключениями. 
// У них нет соответствующих «объектов-обёрток», и они не имеют никаких 
// методов. В некотором смысле, они «самые примитивные».

// Попытка доступа к свойствам такого значения возвратит ошибку:

// // alert(null.test); // ошибка