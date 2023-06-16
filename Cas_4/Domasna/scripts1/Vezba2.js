// 2. Write a function that takes two numbers: the numbers of girls and boys in a team. Print these numbers in console, but add girls and boys correspondingly after them. Example, if the input is 4, 7, the function should print 4 girls 7 boys.
// Bonus:
// For numbers less than 10, add 0 before them. For the bove example that would be 04 girls 07 boys.

function team(girls, boys) {

    if (girls < 10) {
    girls = "0" + girls; 
    }
    if (boys < 10)  {
        boys = "0" + boys;
    }

    return `${girls} girls ${boys} boys`;
}

let team1 = team(12, 17);
console.log(team1);
let team2 = team(3, 11);
console.log(team2);
let team3 = team(11, 3);
console.log(team3);
let team4 = team(4, 5);
console.log(team4);