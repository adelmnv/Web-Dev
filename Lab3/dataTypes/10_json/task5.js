let jsonString = '{"event":"Meeting","date":"2024-01-01T12:00:00.000Z"}';

let obj = JSON.parse(jsonString, function(key, value) {
	return key === "date" ? new Date(value) : value;
});

console.log(obj.date instanceof Date);  // Output: true
console.log(obj.date.toUTCString());   // Output: "Mon, 01 Jan 2024 12:00:00 GMT"
