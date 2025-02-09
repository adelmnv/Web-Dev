function Accumulator(num) {
    this.value = num;
    this.read = function() {
        value += +prompt("Add the value: ");
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); 