const nums = new Set(["one", "two"]);

for (const value of nums.values()) {
    console.log(value);
}

for (const entry of nums.entries()) {
    console.log(entry);
}

for (const value of nums) {
    console.log(value);
}
