var prvProduct = "kaskaval";
var vtorProduct = "meso";
var tretProduct = "leb";


var praznaNiza = []; // prazna niza
var productiPrvNacin = ["kaskaval", "meso", "leb"]; // po upotrebuvan nacin za kreiranje niza
var productiVtorNacin = new Array("kaskaval", "meso", "leb");

console.log(productiPrvNacin);
console.log(productiVtorNacin);

console.log(productiPrvNacin[0]);
console.log(productiPrvNacin[2]);
console.log(productiPrvNacin[3]); // undefined


productiPrvNacin[1] = "jabolko"; // promena na vrednost na promenliva
console.log(productiPrvNacin);

console.log(productiPrvNacin.length);


var novaNiza = ["orange", "ananas", "lime", "banana", "melon", "apple", "pear", "cherry", "strawberry", "blueberry", "bread"];
console.log(novaNiza);

var nizaSoRazlicniElementi = ["string", 1, 4.5, false, [1, 2, 3, 4]];
console.log(nizaSoRazlicniElementi);
console.log(nizaSoRazlicniElementi[4]);
console.log(nizaSoRazlicniElementi[4][2]);

var nizaNaIzbrisaniElementi=[];

var izbrisanElement = novaNiza.pop(); // pop -> za brisenje na posledniot element
console.log(novaNiza);
console.log(izbrisanElement);

// shift -> za brisenje na prviot element

var izbrisanPrvElement = novaNiza.shift();
console.log(novaNiza);
console.log(izbrisanPrvElement);

// Vezba

// var nizaVezba = ["Dog", "Cat", "Tiger", "Lion", "Elephant", "Snake", "Horse", "Chicken", "Monkey", "Bear"];
// console.log(nizaVezba);
// nizaVezba[6] = "Fish";
// var prvElement = nizaVezba.shift();
// console.log(nizaVezba);
// var posledenElement = nizaVezba.pop();
// console.log(nizaVezba);

// push -> dodavanje na element na kraj od nizata

novaNiza.push("kiwi");
console.log(novaNiza);

nizaNaIzbrisaniElementi.push(izbrisanElement);
console.log(nizaNaIzbrisaniElementi);
nizaNaIzbrisaniElementi.push(izbrisanPrvElement);
console.log(nizaNaIzbrisaniElementi);

// unshift -> dodavanje na element na pocetok na niza 

novaNiza.unshift("mango");
console.log(novaNiza);

var kiwi = novaNiza.pop();
nizaNaIzbrisaniElementi.unshift(kiwi);
console.log(nizaNaIzbrisaniElementi);

// toString
console.log("Elementi od nizata novaNiza: " + novaNiza.toString());

// slice -> prikaz na del od nizata, prviot parametar e pocetokot, a vtoriot parametar e krajot na delot od nizata.(bez toj element)
console.log(novaNiza);
console.log(novaNiza.slice(2, 6)); // se prikazuvaat elementite so indeks 2, 3, 4, 5 !


// splice -> so 2 parametri, prviot parametar e od koj element da pocne so brisenje, a vtoriot parametar e kolku elementi da izbrise.
console.log(novaNiza);
novaNiza.splice(5, 4);
console.log(novaNiza);

// splice -> so 3 parametri, prviot parametar e od koj element, vtor parametar ke bide nula za da ne brishe nisto, tret parametar e elementot sto ke se dodade.

console.log(novaNiza);
novaNiza.splice(2, 0, "praska");
console.log(novaNiza);


// includes -> dali nizata sodrzi nekoj element

console.log(novaNiza.includes("banana"));
console.log(novaNiza.includes("orev"));


// sort ->  gi sortira elementite po brojki ili bukvi

console.log(novaNiza);
console.log(novaNiza.sort());

// join -> gi pecati elementite od nizata oddeleni so separator koj nie go zadavame

console.log(novaNiza.join("-"));

// concat -> spojuvanje na poveke nizi

var nizaOdBrojki = [1, 2, 3, 4];

var spoenaNiza = novaNiza.concat(nizaNaIzbrisaniElementi, nizaOdBrojki);
console.log(spoenaNiza);

//indexOf -> go pronaoga indexot na nekoj element

console.log(spoenaNiza.indexOf("bread"));


// funkcii za stringovi

console.log("Filip: 'Ke vi predavam javascript'");
var text = "Ke vi predavam javascript";
console.log("Filip: " + text);
console.log(`Filip: ${text}! i ja iskreira slednava niza ${spoenaNiza}`);


var example = " Hello semos world ";

// substring -> isto kako slice samo za stringovi
console.log(example.substring(2, 7)); // ke gi prikaze karakterite so indexi 2, 3, 4, 5, 6.

// substr -> 2 parametri, prviot od kade da pocne a vtoriot za kolku karakteri da zeme.
console.log(example.substr(2, 6));

// replace -> promena na karakter od stringot (go promenuva prviot sto ke go najde)
console.log(example);
example = example.replace("world", "World");
console.log(example);
// example = example.replace(" ", "-");
// console.log(example);
// example = example.replace(" ", "-");
// console.log(example);

// trim -> gi brishe praznite mesta na pocetok i kraj od stringot
example = example.trim();
console.log(example);

// split -> go deli stringot po daden splitter i kreira niza od stringovi
var nizaOdStringovi = example.split(" ");
console.log(nizaOdStringovi);

// ispisuvanje na karakter od niza spored indexot (isto kako kaj nizite).
console.log(example[1]);

console.log(typeof nizaOdStringovi);