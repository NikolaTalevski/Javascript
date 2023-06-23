// 4. Write a JavaScript program that will read in a number and will multiply its digits.

let num = Number(prompt("Vnesi broj"));

function mul(num) {
    let result = 1;
    let cifri = String(num).split("");
    for (let i=0; i < cifri.length; i++) {
        let cifra = parseInt(cifri[i]);
        result *= cifra;
    }
    return result;
}

let multiply = mul(num);
console.log(multiply);