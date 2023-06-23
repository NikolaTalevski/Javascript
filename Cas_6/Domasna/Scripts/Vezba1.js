// 1. Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

let numbers = [2, 3, 5, 6, 8, 11, 15];

function findLargestNumber(input) {
    let brojac = 0;
    let max = -Infinity;
    while (brojac < input.length) {
        if (input[brojac] > max) {
            max = input[brojac];
        }
        brojac++;
    }
    return max;
}
let maxValue = findLargestNumber(numbers);
console.log(`Max: ${maxValue}`);

function findSmallestNumber(input) {
    let brojac = 0;
    let min = Infinity;
    while (brojac < input.length) {
        if (input[brojac] < min) {
            min = input[brojac];
        }
        brojac++;
    }
    return min;
}
let minValue = findSmallestNumber(numbers);
console.log(`Min: ${minValue}`);

let sum = maxValue + minValue;

console.log(`Sum: ${sum}`);