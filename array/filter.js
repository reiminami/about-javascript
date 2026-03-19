function isEven(number) {
    return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);   // [ 2, 4 ]
