// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // 3 elements - a, b, function