const nums = new Map([
    ["one", 1],
    ["two", 2]
]);

for (const key of nums.keys()) {
    console.log(key);
}

for (const value of nums.values()) {
    console.log(value);
}

for (const [key, value] of nums) {
    console.log(`${key}: ${value}`);
}
