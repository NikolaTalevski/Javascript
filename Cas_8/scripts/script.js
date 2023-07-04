// prodolzenie za Higher order functions


// // forEach
// let niza = [5, 4, 1, 10, 3, 2];

// niza.forEach((x) => console.log(x));  // najmnogu se koristi za da se izmine ili ispishe edna niza

// // niza.forEach((x, i)=> {
// //     console.log(x);
// //     console.log(i);
// // }); // tuka prviot parametar (x) e vrednosta na eden element, dodeka vtoriot parametar (i) e indeksot na eden element.

// //===================================================

// // map

// let niza2 = niza.map((x)=>x*2);  // map se koristi za ako sakame da dobieme nova niza koja ke ima promena
// niza2.forEach((x) => console.log(x));

// let niza3 = niza.map((x, i) => x*2+i);
// niza3.forEach((x) => console.log(x));

// //==================================================

// // filter

// let kandidati = [
//     {name: "Stojan", prezime: "Stojanovski", height: 165},
//     {name: "David", prezime: "Davidovski", height: 175},
//     {name: "Elena", preime: "Elenovska", height: 180}
// ];

// let kandidatiPovisokiOd170 = kandidati.filter((x) => x.height > 170);

// kandidatiPovisokiOd170.forEach((x) => console.log(x.name));


// //====================================================

// // sort

// // niza.sort();  // ke go gleda prvoto brojce iako ima dvocifreni brojki i spored prvoto ke gi sortira od pomalo kon pogolemo
// // console.log(niza);
// // niza.sort((x1, x2) => x1 - x2); // Ascending
// // console.log(niza);
// // niza.sort((x1, x2) => x2 - x1); // Descending
// // console.log(niza);

// //==================================================

// // reduce

// console.log(niza);
// let reducedNiza = niza.reduce((acc, curr) => { // acc == acumulator, toa e sumata, a curr == current, toa e momentalnata vrednost vo dadena iteracija
// console.log(acc);
// return acc + curr;
// }, 0);

// console.log(reducedNiza);


// let proizvod = niza.reduce((acc, curr)=> {
//     return acc * curr;
// }, 1);
// console.log(proizvod);

//===============================================

// DOM
// Manipulacija so DOM (Document Object Model)

// window.onload = function() {  // tret nacin za postavuvanje na javascript so window.onload
//     let idElement = document.getElementById("title");
//     console.log(idElement);
// };


let idElement = document.getElementById("title");
console.log(idElement);
// console.dir(idElement);

let blockElements = document.getElementsByClassName("block");
console.log(blockElements);
let firsElement = blockElements[0];
console.log(firsElement);

let links = document.getElementsByTagName("a");
// console.log(document.getElementsByTagNameNS("a", ""));
console.log(links);
let link = links[0];
console.log(link);

let title = document.querySelector("#title");
let blockElement = document.querySelector(".block");
let blockElement2 = document.querySelectorAll(".block");
let links2 = document.querySelectorAll("a");
console.log(title);
console.log(blockElement);
console.log(blockElement2);
console.log(links2);

let tekstOdNaslov = idElement.innerText; // so innerText go zema stringot bez prazni mesta
console.log(tekstOdNaslov);

// idElement.innerText = "Zdravo"; // so innerText se menuva textot na nekoj element od dokumentot

console.log(link.attributes[0].value);
// link.attributes[0].value = "https://www.google.com";  // prv nacin za menuvanje vrednost na atribut, a i za dodavanje na atribut

// vtor nacina za menuvanje na atribut ili dodavanje 
link.setAttribute("href", "https://www.google.com"); // prv argument na setAtribute e key na atributot, a vtoriot e value.

link.removeAttribute("href");

function lightOn() {
    document.getElementById("light").setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
}

document.getElementById("light_on").addEventListener("click", lightOn);


document.getElementById("light_off").addEventListener("click", () => {
    document.getElementById("light").setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
});


document.getElementById("button").addEventListener("click", () => {
    document.getElementById("result").innerHTML = `<p>${new Date()}</p>`
});

// =====================================
// 9to predavanje
//=====================================

let input = document.getElementById("inputField");
let formButton = document.getElementById("formButton");

formButton.addEventListener("click", (event)=> {
    event.preventDefault();
    console.log(input.value);
    input.value = "";
});

// istrazi za checkbox i radio button
//=====================================

let div = document.createElement("div");
div.id = "firstDiv";
div.innerHTML = `<p>Ova e paragraf</p><h1>Naslov</h1>`;

div.style.color = "red";
div.style.height = "100px";
div.style.width = "100px";
div.style.background = "green";

document.body.appendChild(div);

//=========================
let studenti = [ 
    {ime: "Hristo", prezime: "Gigovski", email: "e1"},
    {ime: "Riste", prezime: "Stojanov", email: "e2"},
    {ime: "Nikola", prezime: "Talevski", email: "e3"},
    {ime: "Cedomir", prezime: "Stefanovski", email: "e4"},
    {ime: "Stevica", prezime: "Manasieski", email: "e5"},
    {ime: "Filip", prezime: "Trajanovski", email: "e6"}
];

function createTable(niza, naslov) {
    let tabela = document.createElement("table");
    let caption = document.createElement("caption");
    caption.innerText = naslov;
    tabela.appendChild(caption);

    let firstRow = document.createElement("tr");
    for(key in niza[0]){
        let th = document.createElement("th")
        th.innerText = key;
        firstRow.appendChild(th);
    }
    tabela.appendChild(firstRow);

    for (element of niza) {
        let tr = document.createElement("tr");
        for(kluc in element) {
            let td = document.createElement("td");
            td.innerText = element[kluc];  // ova e vrednost na edno propery od objektot
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }

    tabela.setAttribute("border", "1px");
    document.body.appendChild(tabela);
}

createTable(studenti, "Studenti");