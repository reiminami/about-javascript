const obj = {
    "one": 1,
    "two": 2,
    "three": 3,
};

for (const key in obj) {
    console.log(`${key} = ${obj[key]}`);
}
