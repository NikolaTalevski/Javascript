// 1. Create an array with numbers
// Print all numbers from the array in a list element.
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as string as well ( 2 + 4 + 5 = 11)

let numbers = [1, 2, 3, 4, 5, 6];

let createList = (array) => {
    let list = document.createElement("ul");
    list.id = "listOfNums";
    array.forEach((element) => {
        let listing = document.createElement("li");
        listing.innerText = element;
        list.appendChild(listing);
    });
    document.body.appendChild(list);
};

createList(numbers);

let sum = (list) => {
    let nizaZaSum = [];
    for (i=0;i<list.children.length; i++) {
        nizaZaSum.push(Number(list.children[i].innerText));
    }
    let summed = nizaZaSum.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    let mathEquation = nizaZaSum.join(" + ") + " = " + summed;
    let equation = document.createElement("h2");
    equation.textContent = mathEquation;
    document.body.appendChild(equation);
};

sum(document.getElementById("listOfNums"));