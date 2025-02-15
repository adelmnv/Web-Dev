function getSecondsToday() {
	let now = new Date();
	let todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	return Math.floor((now - todayStart) / 1000);
}

// Example usage:
console.log(getSecondsToday()); // Varies based on current time
