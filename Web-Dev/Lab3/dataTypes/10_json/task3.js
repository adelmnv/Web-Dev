let user = {
	name: "Charlie",
	age: 28,
	password: "secret123"
};

let json = JSON.stringify(user, ["name", "age"]);  // Exclude "password"
console.log(json);
// Output: '{"name":"Charlie","age":28}'
