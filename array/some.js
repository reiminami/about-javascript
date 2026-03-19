function isEven(number) {
    return number % 2 === 0;
}

const numbers1 = [1, 2, 3];
console.log(numbers1.some(isEven)); // true

const numbers2 = [1, 3];
console.log(numbers2.some(isEven)); // false
