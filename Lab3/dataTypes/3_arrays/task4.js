function sumInput() {
    let nums = [];
    while (true) {
        let value = prompt("Enter a num to sum it:", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        nums.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
  
alert( sumInput() );