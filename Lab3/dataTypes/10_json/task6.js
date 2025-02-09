let person = { name: "David" };
let pet = { type: "Dog", owner: person };
person.pet = pet;

let json = JSON.stringify(person, function replacer(key, value) {
	return key === "pet" ? undefined : value;
});

console.log(json);
// Output: '{"name":"David"}'
