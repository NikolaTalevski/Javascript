var niza1 = ["jajca", "ovosje", "zelencuk"];
console.log(niza1);

var niza2 = new Array("jajca", "ovosje", "zelencuk");
console.log(niza2);

console.log(niza1[1]);
console.log(niza2[2]);

niza1[0] = "meso";
console.log(niza1);

console.log(niza1.length);


var niza3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
console.log(niza3);

var niza4 = ["string", 1, 2.5, true, [1, 2, 3, 4]];
console.log(niza4);
console.log(niza4[4]);
console.log(niza4[4][2]);


var izbrisani = [];

var izbrisan1 = niza3.pop();
console.log(niza3);
console.log(izbrisan1);

var izbrisan2 = niza3.shift();
console.log(niza3);
console.log(izbrisan2);


niza3.push("x");
console.log(niza3);

izbrisani.push(izbrisan1, izbrisan2);
// izbrisani.push(izbrisan2);
console.log(izbrisani);


niza3.unshift("z");
console.log(niza3);

var x = niza3.pop();
izbrisani.unshift(x);
console.log(izbrisani);


console.log(niza3.toString());


console.log(niza3);
console.log(niza3.slice(2, 5));

console.log(niza3);
niza3.splice(2, 5);
console.log(niza3);

niza3.splice(2, 0, "y", "t");
console.log(niza3);


console.log(niza3.includes("i"));
console.log(niza3.includes("p"));


console.log(niza3);
console.log(niza3.sort());

console.log(niza3.join("_"));


var spoena = niza3.concat(izbrisani, niza1, niza2);
console.log(spoena);


console.log(spoena.indexOf("a"));


console.log("Nikola: Zdravo");
var text1 = "Zdravo";
console.log("Nikola: " + text1);
console.log(`Nikola: ${text1}! Ja iskreirav slednava niza: ${spoena}`);


var exp = "Zdravo, jas sum Nikola";

console.log(exp.substring(2, 9));

console.log(exp.substr(2, 9));

console.log(exp);
exp = exp.replace("Zdravo", "Dobar den");
console.log(exp);
exp = exp.replace(" ", "-");
console.log(exp);
exp = exp.replace(" ", "-");
console.log(exp);

exp = exp.trim();
console.log(exp);

var nizaString = exp.split(" ");
console.log(nizaString);

console.log(exp[3]);

console.log(typeof nizaString);