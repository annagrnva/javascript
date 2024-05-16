function Calculator() {
    //this {}
    this.a = 0;
    this.b = 0;

    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    }
    
    this.sum = function() {
        return this.a + this.b
    }
    
    this.mul = function() {
        return this.a * this.b
    }
};

let calculator = new Calculator();

console.log(calculator);

calculator.read(2, 2);

console.log(calculator);

console.log(calculator.sum())
console.log(calculator.mul())