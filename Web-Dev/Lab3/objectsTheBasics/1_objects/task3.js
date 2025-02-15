function sumOfSalaries(salaries){
    let sum = 0;
    for(let salary in salaries){
        sum += salary;
    }
    return sum;
}




let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}