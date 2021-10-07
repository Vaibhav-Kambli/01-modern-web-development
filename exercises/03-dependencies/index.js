const { compareAsc, format, parseISO } = require("date-fns");

const dates = [
	new Date(1995, 6, 2),
	new Date(1987, 1, 11),
	new Date(1989, 6, 10)
];

let today = new Date().toISOString().slice(0, 10);

let birthdate = format(new Date(1995, 07, 26), "MMMM dd yyyy ");

console.log(`Today is ${parseISO(today)}`);

console.log("Dates in order:", dates.sort(compareAsc));

console.log(`Born on: ${birthdate}`);
