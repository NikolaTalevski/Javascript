// Funkcii
// var a = 5;
// var b = 10;
// var zbir = a + b;
// var c = 4;
// var d = 8;
// var zbir2 = c + d;


// --------------------------------------
// deklariranje (kreiranje) na funkcija

// function imeNaFunkcija(){
//   komandi
// }

// povikuvanje(izvrsuvanje na funkcija)

// imeNaFunkcija();
// imeNaFunkcija();
// --------------------------------------

// function greeting(){
//     alert("Hello, i am Nikola");
// }
// greeting();
// greeting();

// function printSum(broj1, broj2){
//     console.log(broj1+broj2);
// }
// printSum(3, 5);
// printSum(2, 4);

//------------------
// VEZBA 1
// function printSum(broj1, broj2){
//     console.log(broj1+broj2);
// }
// printSum(7, 7);

// function printSub(broj1, broj2){
//     console.log(broj1-broj2);
// }
// printSub(5, 3);

// function printMul(broj1, broj2){
//     console.log(broj1*broj2);
// }
// printMul(2, 4);

// function printDiv(broj1, broj2){
//     console.log(broj1/broj2);
// }
// printDiv(10, 2);
// ----------------------

// function printanje(ime, prezime, godini, isWorking){
//     console.log(`${ime} ${prezime} ima ${godini} godini. Vraboten: ${isWorking} `);
// }
// printanje("Nikola", "Talevski", 27, true);

// function zbir(broj1, broj2, broj3){
//     var zbirNaTriBroja = broj1 + broj2 + broj3;
//     return zbirNaTriBroja;
// }
// var zbirPromenliva = zbir(1, 4, 5);
// console.log(zbirPromenliva);
// var zbirPromenliva2 = zbir(2, 4, 6);
// console.log(zbirPromenliva2);
// var novaBrojka = 12 - zbir(1, 4, 5);
// console.log(novaBrojka);

// ------------------
// VEZBA 2 (Mozi i so return)
// function CelToFah(Celsius){
//     console.log(Celsius * 1.8 + 32);
// }

// function FahToCel(Fahrenheit){
//     console.log((5/9) * (Fahrenheit-32));
// }

// CelToFah(30);
// FahToCel(140);


// function CtoF(Celsius) {
//     let Celsius1 = Celsius * 1.8 +32;
//     return Celsius1;
// }
// let Celsius2 = CtoF(30);
// console.log(Celsius2)
// -----------------


// Globalna i lokalna promenliva

// var promenlivaNadvorOdFunkcija = "Globalna promenliva" // => Ova e globalna promenliva
// var brojka = 14;

// function nekojaFunkcija() {
//     brojka = 15;
//     // var promenlivaVoFunkcija = "Lokalna promenliva"; => Ova e lokalna promenliva
//     // promenlivaVoFunkcija = 18; => poradi toa sto nema var koga se kreira promenlivata pod default se kreira globalna promenliva(Ova ne treba da se slucuva i se smeta za greska)
//     return brojka;
// }
// // console.log(brojka);
// console.log(nekojaFunkcija());
// var novaBrojka = nekojaFunkcija();
// console.log(novaBrojka);
// console.log(promenlivaVoFunkcija);


// var, let, const
// var => function scope
// let => block scope
// const => block scope (ne mozeme da ja menuvame vrednosta na promenliva koja e const)

// const konstanta = "konstanta vrednost";
// const PI = 3.14;

// function nesto(){
//     if(true){
//         let color = "red";
//     }
//     // console.log(color); // ova ke dade greska bidejki color promenlivata postoi samo vo if blokot
// }
// nesto();


// Built in functions
// - parseInt()
// - parseFloat()
// - Number()
// - String() -> obratno od Number dobiva brojka kako parametar a vraka string
// - site funkcii za nizi i stringovi
//------------------------------------------------------------------------------------------------------

// OBJECTS

// I nacin kreiranje na objekti: Literal notation

// let human = {
//     ime: "Petko",
//     prezime: "Petkovski",
//     age: 35,
//     height: 190, 
//     isWorking: false,

//     sleep: function(){
//         console.log(`${this.ime} ${this.prezime} is sleeping.`);
//     }
// };
// console.log(human.ime);
// console.log(`${human.ime} ${human.prezime} ima ${human.age} godini`);
// console.log(human["ime"]); // vtor nacin na pristapuvanje na property
// human.sleep();

// ------------------------------------
// VEZBA 3

// let me = {
//     ime: "Nikola",
//     prezime: "Talevski",
//     age: 26,
//     height: 200,
//     isWorking: true,

//     watchTV: function() {
//         console.log(`${this.ime} ${this.prezime} is watching TV.`);
//     }
// }
// console.log(me.ime);
// console.log(me.prezime);
// console.log(me.age);
// console.log(me.height);
// console.log(me.isWorking);
// me.watchTV();

// ---------------------------------