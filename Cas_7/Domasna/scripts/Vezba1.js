// 1. How many times is a number contained in an array

// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.

let array = [2, 3, 5, 6, 2, 7, 2];

function findNumber(num, array) {
    let count = 0;
    for (i=0; i < array.length; i++) {
        if (array[i] == num) {count++}
    }
    return count;
}

let count = findNumber(2, array);
console.log(`There is ${count} occurences of number 2 in the array.`);

let array2 = [23, 33, 53, 63, 23, 73, 23, 63];
let count2 = findNumber(63, array2);
console.log(`There is ${count2} occurences of number 63 in the array.`);

let array3 = [11, 13, 15, 17, 17, 17, 17, 17, 19];
let count3 = findNumber(17, array3);
console.log(`There is ${count3} occurences of number 17 in the array.`);