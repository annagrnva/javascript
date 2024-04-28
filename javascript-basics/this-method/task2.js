// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//     a: 0,
//     b: 0,

//     read: function(a, b){
//         this.a = a;
//         this.b = b;
//     },

//     sum: function() {
//       return  this.a + this.b
//     },

//     mul: function() {
//         return this.a * this.b
//     }
//   };

//   // console.log(calculator)
//   calculator.read(1,5);
//   // console.log(calculator)

//   console.log( calculator.sum() );
//   console.log( calculator.mul() );

//   calculator.read(2,3);
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );



let calculator = {
    a: 0,
    b: 0,

    read: function (a, b) {
        this.a = a;
        this.b = b;
    },

    sum: function () {
        if (this.a !== 0 && this.b !== 0) {
            return this.a + this.b
        } else {
            console.log('Сначала объявите a и b')
        }
    },

    mul: function () {
        return this.a * this.b
    },

    reset: function () {
        this.a = 0;
        this.b = 0;
    },

    div: function () {
        return this.a / this.b
    }

};

//   console.log(calculator);
//   calculator.read(2,4);
//   console.log(calculator);
//   calculator.reset();

calculator.read(4, 4);
console.log(calculator.div());
