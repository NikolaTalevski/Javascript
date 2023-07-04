// 2.Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

function weightInChickens (weight) {
    weight = prompt("Vnesi kilogrami");

let chickens = weight / 0.5;

let title = document.createElement("h1");
document.body.appendChild(title);
title.innerHTML = "Calculate weight in chickens";

let result = document.createElement("p");
document.body.appendChild(result);
result.innerHTML = `There are ${chickens} chickens in ${weight} kg.`;

}
weightInChickens();