// 3. Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML

let name = prompt("Kako se vika receptot?");
let title = document.createElement("h1");
document.body.appendChild(title);
title.innerHTML = "Ime na receptot: " + name;

let numberIng = Number(prompt("Kolku sostojki se potrebni?"));
let number = document.createElement("h4");
document.body.appendChild(number);
number.innerHTML = "Broj na sostojki: " + numberIng;

let x = document.createElement("h6");
document.body.appendChild(x);
x.innerHTML = "Potrebni sostojki:";

let ing = [];
for (i = 0 ; i < numberIng; i++) {
    let nameIng = prompt("Kako se vika sekoja sostojka?");
    ing.push(nameIng);
}
let listIng = document.createElement("ul");
document.body.appendChild(listIng);
for (i = 0; i < ing.length; i++) {
    Ing = document.createElement("li");
    listIng.appendChild(Ing);
    Ing.innerHTML = ing[i];
}

