let car = { brand: "Toyota", model: "Corolla", year: 2022 };
let json = JSON.stringify(car, null, 2);
console.log(json);
/*
Output:
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2022
}
*/
