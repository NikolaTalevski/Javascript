// 3. Write a JavaScript function that will:
// calculate and return your dog's age based on the conversion rate of 1 human year to 7 dog years.
//  Print the following message: Your dog's age is NN years. NN is the calculated age;
// Note: Call the function and pass human years as input.
// Bonus: Make function for converting dog to human years as well

// Human to Dog 1-nacin
function HumanToDog (age) {
    age = age * 7;
    console.log(`Your dog's age is ${age} years`);
}
HumanToDog(26);

// Dog to Human 1-nacin
function DogToHuman (age1) {
    age1 = age1 / 7;
    console.log(`Your human's age is ${age1} years`);
}
DogToHuman(50);

// Human to Dog 2-nacin
function HtoD(age2) {
    let dogAge = age2 * 7;
    return dogAge;
}
let dogAge = HtoD(26);
console.log("Your dog's age is: " + dogAge + " years.");

// Dog to Human 2-nacin
function DtoH(age3) {
    let humanAge = age3 / 7;
    return humanAge;
}
let humanAge = DtoH(50);
console.log("Your human's age is: " + humanAge + " years.");
