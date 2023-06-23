// 2. Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let first = ["Bob" , "Jill", "Bill"];
let last = ["Gregory", "Wurtz", "Gates"];
let full = [];

function fullNames(firstNames, lastNames) {
for (let i = 0; i < firstNames.length; i++) {
    let names = `${i+1}. ${firstNames[i]} ${lastNames[i]}`;
    full.push(names);
}
return full;
}

fullNames(first, last);
console.log(full);
