function formatDate(date) {
	let diff = new Date() - date;

	if (diff < 1000) return "right now";

	let sec = Math.floor(diff / 1000);
	if (sec < 60) return `${sec} sec. ago`;

	let min = Math.floor(diff / 60000);
	if (min < 60) return `${min} min. ago`;

	let d = date;
	let day = d.getDate().toString().padStart(2, '0');
	let month = (d.getMonth() + 1).toString().padStart(2, '0');
	let year = (d.getFullYear() % 100).toString().padStart(2, '0');
	let hours = d.getHours().toString().padStart(2, '0');
	let minutes = d.getMinutes().toString().padStart(2, '0');

	return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// Example usage:
console.log(formatDate(new Date(new Date() - 1))); // "right now"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
console.log(formatDate(new Date(2023, 0, 1, 10, 30))); // "01.01.23 10:30"
