const person = {
    name: "John",
    age: 20,
};

console.log(person.x === undefined);        // true
console.log("name" in person);              // true
console.log(Object.hasOwn(person, "name")); // true
console.log(person.hasOwnProperty("name")); // true
