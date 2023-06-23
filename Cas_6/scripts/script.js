// Vezba 1
//----------------------------------------------------------------------------
// let broj1 = Number(prompt("Vnesi brojac"));
// let broj2 = Number(prompt("Vnesi do koj broj da odi brojacot"));
// let proizvod = 1;
// let i = broj1;
// while (i<=broj2) {
//     if (i%2 !==0){
//     proizvod*=i;
//     }
//     i++;
// }
// console.log(`Proizvodot na neparnite broevite megu ${broj1} i ${broj2} e ${proizvod}`);
//----------------------------------------------------------------------------

// Prodolzenie za ciklusi

// let karakter = prompt("Vnesi broj");
// let niza = [];

// if (isNaN(karakter))  // isNaN -> is not a number
// {
//     console.log("Vnesovte karakter koj ne e broj");
// }
// else {
//     while (!isNaN(karakter)) {
//         niza.push(karakter);
//         karakter = prompt("Vnesi broj");
//     }
// }
// console.log(niza);

// --------------------
// let brojac = 0;
// let primerNiza = [1, 3, 7, 8]; // primerNiza.lenght == 4

// // brojac == 0, 0<4, print prv element(1) i brojac++ = 1,
// // brojac == 1, 1<4, print vtor element(3) i brojac++ = 2,
// // brojac == 2, 2<4, prin tret element(7) i brojac++ = 3,
// // brojac == 3, 3<4, print cetvrt element(8) i brojac++ = 4,
// // brojac == 4, 4<=4, print undefined, brojac++ = 5,
// //brojac == 5, 5<=4, zapira while!!!

// while(brojac <= primerNiza.length) {
//     console.log(primerNiza[brojac]);
//     brojac++;
// }
// ---------------------

// let brojac = 0;

// while ( brojac < niza.length){
//     // console.log(niza[brojac]);
//     document.write(niza[brojac]); // za da se pisuva na ekran element
//     brojac++;
// }


// let brojac2 = 0;
// let zbir = 0;

// while(brojac2 < niza.length) {
//     zbir += Number(niza[brojac2]);
//     brojac2++;
// }
// console.log(zbir);

// -----------------------------------------
// function digitsInNumber(input) {
//     console.log(`The number is ${input}`);

//     while (input>0){
//         console.log(input%10);
//         input = parseInt(input/10);
//     }
// }
// // brojot e 543
// // vo uslovot od while: 543>0, znaci vleguva vo while, 543 % 10 = 3 (543/10=54.3)
// // so parseInt vikame da dobieme pri delenjeto cel broj bez decimali,
// // vtora iteracija proveruva dali 54 e pogolemo od 0 == true, vleguva vo while, 54 % 10 == 4
// // treta iteracija proveruva dali 5 e pogolemo od 0 == true, vleguva vo while, 5 % 10 == 5, 5/10 poradi parseInt = 0
// // na kraj proveruva input == 0 > 0, ova e false i tuka zapira while. 

// digitsInNumber(543);


//Najgolemiot broj vo edna niza
//-----------------------

let numbers = [-2, 1, 4, 5, 35, 46, 8, 10, 25];

function findLargestNumber(input) {
    let brojac = 0;
    let max = -Infinity;
    while (brojac < input.length) {
        if (input[brojac] > max){
            max = input[brojac];
        }
        console.log(`Value of max is ${max}`);
        brojac++;
    }
    return max;
}

let maxValue = findLargestNumber(numbers);
console.log(maxValue);
//----------------------------

// Funkcija za stepen

function sumPow(num1, num2) {
    let result = 0;
    let brojac = num1;
    while (brojac<= num2) {
        result+=Math.pow(brojac, 2); // za Math proveri i drugi funkcii
        brojac++;
    }
    return result;
}
console.log(sumPow(1, 10));

//==============================

// DO, WHILE 

let brojac = 10;
let suma = 0;

do {
    suma+=brojac;
    brojac++;
} while (brojac<10);

console.log(suma);
//------------------
// FOR

// for(inicijalizacija; uslov; brojac++) {
//      naredbi;
//}

// for (let brojac = 1; brojac <= 10; brojac++) {
//     console.log(brojac);
// }

let iminja = ["Filip", "Hristo", "Riste", "Nikola", "Cedomir", "Stevica"];

for (let i = 0; i < iminja.length; i++) {
    console.log(iminja[i]);
}


let nizaOdBrojki = ["nula", "eden", "dva", "tri", "cetiri", "pet", "sest", "sedum", "osum", "devet"];

let broj = Number(prompt("Vnesi broj"));
if (isNaN(broj) || broj<10 || broj>99) {
    console.log("Brojot e nevaliden!");
} else {
    let str = "";
    for (let pom = broj; pom > 0; pom = parseInt(pom/10)){
        let cifra = pom%10; // ovde ja dobivame cifrata
        str = " " + nizaOdBrojki[cifra] + str;
    }
    console.log(str.trim());
}


// FOR OF, FOR IN

// so for of se ispisuvaat vrednostite na elementite
for(element of nizaOdBrojki) {
    console.log(element); // nizaOdBrojki[brojac];
} 

// so for in se ispisuvaat indeksite na elementite
for (brojkaOdNizata in nizaOdBrojki) {
    console.log(brojkaOdNizata);
}