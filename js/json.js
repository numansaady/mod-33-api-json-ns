// JavaScript Object Notation
// JSON
const user = { id: 1, name: "Abul", job: "Developer" };
// convert JS object to String using JSON.stringify()
const stringified = JSON.stringify(user);
// convert String to JS object using JSON.parse()
const converted = JSON.parse(stringified);
console.log(user);
console.log(stringified);
console.log(converted);
