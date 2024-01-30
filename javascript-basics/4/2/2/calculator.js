let calculator = {
    read() {
        let a = prompt("введите значение а", );
        let b = prompt("введите значение b", );
    },
    sum() { 
        return this. a + this.b; 
    },

    mul() { 
        return this.a * this.b;
  },
}
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );