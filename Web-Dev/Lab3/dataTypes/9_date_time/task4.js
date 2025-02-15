function getDateAgo(date, days) {
	let newDate = new Date(date);
	newDate.setDate(date.getDate() - days);
	return newDate.getDate();
}

let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
