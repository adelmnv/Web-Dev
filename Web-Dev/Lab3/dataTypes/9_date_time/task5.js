function getLastDayOfMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();  // Setting day to 0 gets the last day of the previous month
}

// Example usage:
console.log(getLastDayOfMonth(2012, 1));  // 29 (Feb 2012, leap year)
console.log(getLastDayOfMonth(2021, 1));  // 28 (Feb 2021)
console.log(getLastDayOfMonth(2021, 11)); // 31 (Dec 2021)
