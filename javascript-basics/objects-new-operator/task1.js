// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.


let anna = {
    name: 'Anna'
}
function A(name) {
   return this.name = name;
     
};

function B(name) {
   return  this.name = name;
    
};

let a = new A();
let b = new B();

console.log(a == b) //false