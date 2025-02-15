let calculator = {
    first: 0,
    second: 0,
    read() {
        fisrt = prompt("What is the first number?", 0)
        second = prompt("What is the second number?", 0)
    },
    sum() {
        return first + second;
    },
    mul() {
        return first * this.second;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );