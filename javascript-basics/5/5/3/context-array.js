// Вызов в контексте массива
// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log ( this );
});

arr[2](); //[ 'a', 'b', [Function (anonymous)] ]