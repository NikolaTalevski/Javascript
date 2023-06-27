// 2. Try to write a function that finds factorial of a number. You must use recursion. Example for factorial: factorial of 5 is 5*4*3*2*1 = 120,
//  factorial of 3 is 3*2*1 = 6, factorial of 1 is 1.

function factorial(num) {
    if(num === 0 ) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(1));