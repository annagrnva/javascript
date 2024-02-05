let calculator = {
    read() {
        this.a = 2;
        this.b = 2;
    },
    sum() { 
        console.log(this.a);
        return this.a + this.b; 
    },

    mul() { 
        return this.a * this.b;
  },
}
  
  calculator.read();
  console.log( calculator.sum() );
 