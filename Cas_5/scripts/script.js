// VEZBA1
//--------------------------------
let car = {
    model: "Audi",
    color: "Black",
    year: "2022",
    fuel: "Diesel",
    fuelConsumption: 0.1,

    distance(distance1) {
        let result = this.fuelConsumption * distance1;
        return result;
        
    }
}

console.log(car.distance(100));
//---------------------------------

// II nacin za kreiranje na objekti -> Constructor notation

let hotel = new Object(); // let hotel = {}
hotel.name = "Hilton";
hotel.rooms = 40;
hotel.booked = 25;
hotel.employees = ["Petko", "Stanko", "Marija"];
hotel.owner = {
    ime: "Petar",  // ime e key na propertito, "Petar" e value na propertito
    prezime: "Stefanovski",
    god: 56,
};

hotel.checkAvailableRooms = function(){
    return this.rooms - this.booked;
};

console.log(hotel.owner.ime);

console.log(hotel.name);
console.log(hotel.checkAvailableRooms());
console.log(hotel.employees[1]);

let petko = {
    ime: "petko",
    prezime: "prezime",
    god: 30
}
console.log(petko);
petko.height = 180;
petko.god = 45;
console.log(petko);

delete hotel.name;
console.log(hotel);


//// VEZBA 2
//----------------------------------
let trainer = 	{
name :  "Stefan", 
lastName: "Stefanovski",
academy: "Semos",
lecture: "Objects",

getFullName: function (){
    let NS = `${this.name} ${this.lastName}`;
    return NS;
}
}

console.log(trainer);
delete trainer.lecture;
console.log(trainer);
trainer.age = 30;
console.log(trainer);

console.log(trainer.getFullName());
//------------------------------------

// III nacin za kreiranje na objekti -> Constructor notation template

function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailableRooms = function() {
        return this.rooms - this.booked;
    };
}

let hilton = new Hotel("Hilton", 40, 25);
let meriot = new Hotel("Mariot", 100, 56);

let slobodniobiNaHilton = hilton.checkAvailableRooms();
console.log(slobodniobiNaHilton);

function Human (ime, prezime, god) {
    this.ime = ime;
    this.prezime=prezime;
    this.god = god;
}

let stanko = new Human("Stanko", "Stankovski", 55);
let marija = new Human("Marija", "Stefanovska", 40);
marija.mominskoPrezime = "Petkovska";
console.log(marija);

// keyword this
//-----------------------------------------------
function windowSize() {  
    // ovaa funkcija e metod na window objektot
    let width = this.innerWidth; // innerWidth i innerHeight se propertija na wondow objektot, ovde this pokazuva kon wondow objektot.
    let height = this.innerHeight;
    return [height, width];
}
console.log(windowSize());
//-----------------------------------------------

// Pass by value vs Pass by reference

// pass by value
//---------------
let a=5;
let b=a;
console.log(a);
console.log(b);
a = 10;
console.log(a);
console.log(b);
b = 22;
console.log(a);
console.log(b);
//-----------------

// pass by reference
//-------------------
let dog = {
    breed: "terier",
    color: "brown",
    name: "Dzeki",
};

let dog2 = dog;

console.log(dog);
console.log(dog2);

dog2.color = "white";

console.log(dog);
console.log(dog2);
//---------------------

// string
let c = "Hello";
let d = c;

d = "Hi";

console.log(c);
console.log(d);
//---------------------------------------------------------------------------------


// CIKLUSI

// I -> While


// while (uslov) {
//    naredba => cekor
// }
// cekor1, cekor2, cekor3, cekor4, cekor5 => zavrsen e uslovot

let brojac = 1;
while(brojac<=5) {
    console.log(brojac);
    brojac++; // brojac = brojac+1
}

// prva iteracija => brojac=1, (1<=5) == true, ispisuva 1, brojac+1=2
// vtora iteracija => brojac=2, (2<=5) == true, ispisuva 2, brojac+1=3
// treta iteracija => brojac=3, (3<=5) == true, ispisuva 3, brojac+1=4
// cetvrta iteracija => brojac=4, (4<=5) == true, ispisuva 4, brojac+1=5
// petta iteracija => brojac=5, (5<=5) == true, ispisuva 5, brojac+1=6
// sesta iteracija => brojac=6, (6<=5) == false, tuka zavrsuva celiot ciklus

let brojac2 = 1;
while(brojac2<10) {
    if(brojac2 % 2 == 0){
        console.log(brojac2);
    }
    brojac2++;
}


let broj1 = Number(prompt("Vnesi brojac"));
let broj2 = Number(prompt("Vnesi broj za do kade da odi ciklusot"));
let zbir = 0;
let i = broj1; // pass by value
while(i<=broj2) {
    zbir+=i; // zbir = zbir + broj1
    i++;
}

console.log(`Zbirot na broevite megu ${broj1} i ${broj2} e ${zbir}`);