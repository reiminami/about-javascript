const user = {
    name: {
        firstName: "John",
        lastName: "Lennon",
    }
};

console.log(user.name.firstName?.length);   // 4
console.log(user.name.middleName?.length);  // undefined (?なしはエラー)
