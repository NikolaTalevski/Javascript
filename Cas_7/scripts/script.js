// Prodolzenie za ciklusi

let movie = {
    title: "Random movie",
    year: 2023,
    stars: ["StarOne", "StarTwo", "StarThree"],
};

// let keys = Object.keys(movie);  // [title, year, stars]
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     let value = movie[key]; // isto kako movie.title kako primer
//     console.log(`${key}: ${value}`);
//     if(Array.isArray(value)) {
//         for (let j = 0; j < value.length; j++) {
//             console.log(value[j]);
//         }
//     }
// }
//================================

let niza = [[1, 2, 3], [5, 8, 10], [11, 23, 41]];

for (element of niza) {
    for (podElement of element) {
        console.log(podElement);
    }
}
//---------------------------------

for (key in movie){
    console.log(movie[key]);
}
// so for in gi dobivame keys od Objektite, i indeksite od nizite
// so for of gi dobivame vrednostite od Objektite i vrednostite od nizite
//=================================

// break i continue

let denovi = ["Ponedelnik", "Vtornik", "Sreda", "Cetvrtok", "Petok", "Sabota", "Nedela"];

for ( let i=0; i < denovi.length; i++) {
    if (denovi[i] == "Cetvrtok"){
        break;
    }
    console.log(denovi[i]);
}

for (let i=0; i < denovi.length; i++) {
    if(denovi[i] == "Cetvrtok"){
        continue;
    }
    console.log(denovi[i]);
}
//==============================

let artikli = ["Leb", "Mleko", "Puter", "Salata"];

function checkForItemInArtikli(item) {
    for (let artikl of artikli) {
        if (artikl === item) {
            console.log(`Artiklot ${item} e pronajden`);
            return artikl;
        }
    }
    console.log(`Artiklot ${item} ne e pronajden vo nizata`);
    return null;
}

let baranArtikl = checkForItemInArtikli("Mleko");
console.log(baranArtikl);

function deleteItem(item) {
    for (let i=0; i < artikli.length; i++){
        if(artikli[i] === item) {
        console.log("Item has been deleted");
        artikli[i]=null;
        return true;
        }
    }
    return false;
}

deleteItem("Mleko");
console.log(artikli);
//==============================================================

// PRODOLZENIE ZA FUNKCII

// Osnoven nacin za kreiranje na funkcija
// function printanje() {
//     console.log("Hello");
// }
// printanje();


// anonimni funkcii

// let printanje = function(){
//     console.log("Hello");
// }
// printanje();


// Arrow funkcii

let printanje = () => console.log("Hello");
printanje();

let slozenaFunkcja = () =>{
    console.log("nesto"); 
    console.log("drugo nesto");
}
slozenaFunkcja();

let sobiranjeSoDeset = (num) => num + 10;  // function sobiranjeSoDeset(num) { return num+10}
console.log(sobiranjeSoDeset(5));

let proizvod = (num1, num2) => {
    let result = num1*num2;
    console.log(`${num1} * ${num2} = ${result}`)
    return result;
}
proizvod(4, 5);

//=====================================

function osnovnaFunkcija(...args) {
    console.log(args);
    console.log(args[2]);
}

osnovnaFunkcija(1, 2, "s", true, 5, 10);
//======================================

//---------------------------
// faktoriel 5! = 5*4*3*2*1 
//----------------------------

function sobiranje(brojka) {
    let suma = 0;
    for (let i=0; i<brojka; i++) {
        suma+=i;
    }
    return suma;
}
console.log(sobiranje(10));

// rekurzivna funkcija

function sum(num) {
    if(num === 0) {
        return 0;
    }
    return num + sum(num-1);  // num-1 === num
}
console.log(sum(5));

// sum(5) => 5 + sum(4); 5 + 10 === 15
// sum(4) => 4 + sum(3); 4 + 6 === 10
// sum(3) => 3 + sum(2); 3 + 3 === 6
// sum(2) => 2 + sum(1); 2 + 1 === 3
// sum(1) => 1 + sum(0); 1 + 0 === 1
// sum(0) === 0;

//===========================================
// Returning function from another function

function calculator(operator) {
    switch(operator){
        case "+":
            return function(number1, number2) {return number1 + number2};
            // break; ovaj break e visok, zatoa sto imame return so koj se izleguva od funkcijata
        case "-":
            return function(number1, number2) {return number1 - number2};
            // break; ovaj break e visok, zatoa sto imame return so koj se izleguva od funkcijata
        default: console.log("Error");
        return null;
    }
}
let result = calculator("+");
console.log(result(4, 5));

// funkcija kako argument

function greeting () {
    console.log("Hello");
}

function bye() {
    console.log("Bye");
}

function test(number, f1, f2) {
    if (number%2==0) {
        f1();
    } else {
        f2();
    }
}

test(2, greeting, bye);

// funkcija kako element od niza

let nizaOdFunkcii = [greeting, bye, (num1, num2)=> num1+num2, calculator];

nizaOdFunkcii[0](); 
console.log(nizaOdFunkcii[2](2, 3));

//===================================================
// setTimeout

// let timeout = setTimeout(()=>{
//     alert("hi");
// }, 3000); //7000 se milisekundi, odnosno 7 sekundi

// // clearTimeout(timeout);



// setInterval

// let interval = setInterval(()=>{
//     alert("Interval");
// }, 2000);

// clearInterval(interval);

// ===================================================

// Higher order functions

// 1. forEach

let studenti = ["Student1", "Student2", "Student3"];
for(student of studenti) {
    console.log(student);
}

let students = [{firstName: "Student1", lastName: "Prezime"},{firstName: "Student2", lastName: "Prezime2"}, {firstName: "Student3", lastName: "Prezime3"} ];

studenti.forEach((student) => console.log(student));
students.forEach((student) => console.log(`${student.firstName} ${student.lastName}`));