/*
The following code will be refactored when:
 * Use template strings - do not use + to concatenate strings
 * Do not use var anywhere in your code - only use let and const
 * Use arrow functions where necessary - anonymous functions should be arrow functions
 * Declare defaults in function signatures - don't use || to declare a value
 * Use object shorthand to setup objects
 * Use destructuring in function signatures and in the function body
 * Use the spread and rest operators
 * Use modules to organize your code
*/
import { people } from "./people.js";

const getEmails = (people, options) => {
	const { withNames, onlyActive } = options;

	if (onlyActive) {
		people = people.filter(isActive);
	}

	return people
		.map((person) => {
			let result = "";

			if (withNames) {
				result = `${person.name} < ${person.email} >`;
			} else {
				result = person.email;
			}

			return result;
		})
		.join(", ");
};

const getAddresses = (people, options) => {
	const { onlyActive } = options;

	if (onlyActive) {
		people = people.filter(isActive);
	}

	return people
		.map((person) => {
			const { address } = person;

			let fullAddress = address.line2
				? `${person.name}\n${address.line1}\n${address.line2}\n${address.city}\n${address.state}`
				: `${person.name}\n${address.line1}\n${address.city}\n${address.state}`;

			return fullAddress;
		})
		.join("\n\n");
};

const getYoungest = (people) => {
	people.sort((personA, personB) => {
		return personA.age - personB.age;
	});
	const [youngest, ...others] = people;
	return { youngest, others };
};

const isActive = (person) => person.isActive;

// these function calls should still work after the refactor!
let emails = getEmails(people, {
	withNames: true
});
console.log(emails);

let addresses = getAddresses(people, {
	onlyActive: true
});
console.log(addresses);

let youngest = getYoungest(people);
console.log(youngest);
