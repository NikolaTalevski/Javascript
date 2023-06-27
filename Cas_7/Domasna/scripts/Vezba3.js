// 3. Create an array of five first names and an array of five last names. Create a new array that will have same number of elements as the
// other two arrays, but the elements will be fullnames. Use for loop and a function to create a full name, where the first argument will be
// the first name (from the first array) and the second argument will be last name( from the second array). The function will return full name.
// Print all the full names with higher order function forEach().

let firstNames = ["Nikola", "Zoran", "Filip", "Vladimir", "Igor"];
let lastNames = ["Talevski", "Zoranovski", "Filipovski", "Vladimirovski", "Igorovski"];
let fullNames = [];

function full(first, last) {
    for (let i = 0; i < first.length; i++) {
        let names = `${first[i]} ${last[i]}`;
        fullNames.push(names);
    }
    return fullNames;
}

full(firstNames, lastNames);
console.log(fullNames);

fullNames.forEach((fullname) => console.log(fullname));