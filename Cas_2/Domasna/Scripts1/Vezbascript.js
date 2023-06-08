// If - else

var godina = parseInt(prompt("Vnesi godina: "));

if ((godina - 4) % 12 == 0) {
    console.log("Chinese Zodiac: Rat");
} else if ((godina - 4) % 12 == 1) {
    console.log("Chinese Zodiac: Ox");
} else if ((godina - 4) % 12 == 2) {
    console.log("Chinese Zodiac: Tiger");
} else if ((godina - 4) % 12 == 3) {
    console.log("Chinese Zodiac: Rabbit");
} else if ((godina - 4) % 12 == 4) {
    console.log("Chinese Zodiac: Dragon");
} else if ((godina - 4) % 12 == 5) {
    console.log("Chinese Zodiac: Snake");
} else if ((godina - 4) % 12 == 6) {
    console.log("Chinese Zodiac: Horse");
} else if ((godina - 4) % 12 == 7) {
    console.log("Chinese Zodiac: Goat");
} else if ((godina - 4) % 12 == 8) {
    console.log("Chinese Zodiac: Monkey");
} else if ((godina - 4) % 12 == 9) {
    console.log("Chinese Zodiac: Rooster");
} else if ((godina - 4) % 12 == 10) {
    console.log("Chinese Zodiac: Dog");
} else if ((godina - 4) % 12 == 11) {
    console.log("Chinese Zodiac: Pig");
}

// Ternary operator

var godinaTernary = parseInt(prompt("Vnesi godina: "));

var Ternary = ((godinaTernary - 4) % 12 == 0) ? "Chinese Zodiac: Rat" : ((godinaTernary - 4) % 12 == 1) ? "Chinese Zodiac: Ox" : ((godinaTernary - 4) % 12 == 2) ? "Chinese Zodiac: Tiger" : ((godinaTernary - 4) % 12 == 3) ? "Chinese Zodiac: Rabbit" : ((godinaTernary - 4) % 12 == 4) ? "Chinese Zodiac: Dragon" : ((godinaTernary - 4) % 12 == 5) ? "Chinese Zodiac: Snake" : ((godinaTernary - 4) % 12 == 6) ? "Chinese Zodiac: Horse" :((godinaTernary - 4) % 12 == 7) ? "Chinese Zodiac: Goat" : ((godinaTernary - 4) % 12 == 8) ? "Chinese Zodiac: Monkey" : ((godinaTernary - 4) % 12 == 9) ? "Chinese Zodiac: Rooster" : ((godinaTernary - 4) % 12 == 10) ? "Chinese Zodiac: Dog" : ((godinaTernary - 4) % 12 == 11) ? "Chinese Zodiac: Pig" : "";
console.log(Ternary);

// Switch

var godinaSwitch = parseInt(prompt("Vnesi godina: "));
var zodiac = ((godinaSwitch - 4) % 12);

switch(zodiac) {
    case 0:
        console.log("Chinese Zodiac: Rat");
        break;
    case 1:
        console.log("Chinese Zodiac: Ox");
        break;
    case 2:
        console.log("Chinese Zodiac: Tiger");
        break;
    case 3:
        console.log("Chinese Zodiac: Rabbit");
        break;
    case 4:
        console.log("Chinese Zodiac: Dragon");
        break;
    case 5:
        console.log("Chinese Zodiac: Snake");
        break;
    case 6:
        console.log("Chinese Zodiac: Horse");
        break;
    case 7:
        console.log("Chinese Zodiac: Goat");
        break;
    case 8:
        console.log("Chinese Zodiac: Monkey");
        break;
    case 9:
        console.log("Chinese Zodiac: Rooster");
        break;
    case 10:
        console.log("Chinese Zodiac: Dog");
        break;
    case 11:
        console.log("Chinese Zodiac: Pig");
        break;
    default:
        console.log("Greska!!!");
        break;
}