function getSecondsToTomorrow() {
	let now = new Date();
	let tomorrowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	return Math.floor((tomorrowStart - now) / 1000);
}

// Example usage:
console.log(getSecondsToTomorrow()); // Varies based on current time
