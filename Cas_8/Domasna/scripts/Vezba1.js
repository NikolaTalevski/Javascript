// 1. Create a Constructor function for product. Each product has property name, category, hasDiscount and price. Create an array of 15 products. Now answer the following requirements:

// Find all products with price greater than 20.
// Get the names of all products of Category Food, that are on discount.
// The average price of all products that are on discount.
// Find the name and price of all products with name starting with a vowel, that are not on discount.
// Sort the products by price, ascending.

// Use higher order functions!

function product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}
let products = [
new product("mleko", "drink", true, 90),
new product("leb", "food", false, 40),
new product("jajca", "food", false, 150),
new product("jogurt", "drink", true, 100),
new product("sok", "drink", false, 60),
new product("kaskaval", "food", false, 600),
new product("voda", "drink", true, 18),
new product("pivo", "drink", false, 55),
new product("cokolado", "food", false, 80),
new product("sladoled", "food", true, 80),
new product("meso", "food", false, 400),
new product("kafe", "drink", true, 70),
new product("oriz", "food", false, 110),
new product("kompir", "food", false, 130),
new product("oves", "food", true, 75),
];

// Find all products with price greater than 20.

let Price = products.filter((x) => x.price > 20);
Price.forEach((x) => console.log(x.name));

// Get the names of all products of Category Food, that are on discount.
let FoodDiscount = products.filter((x) => x.category == "food" && x.hasDiscount == true);
FoodDiscount.forEach((x) => console.log(x));

// The average price of all products that are on discount.
let dis = products.filter((x) => x.hasDiscount == true);
let sum = dis.reduce((acc, curr) => {
    return acc + curr.price;
}, 0);
let avg = sum / dis.length;
console.log("Prosecnata vrednost na produktite koi se na popust e: " + avg);

// Find the name and price of all products with name starting with a vowel, that are not on discount.
let vowels = ["a", "e", "i", "o", "u"];
let vowel = function(word) {
    let result = false;
    for (let i=0; i < vowels.length; i++){
        if(word[0] == vowels[i]) {
            result = true;
        }
    }
    return result;
};
let finalResult = products.filter((x) => x.hasDiscount == false && vowel(x.name));
console.log(finalResult);

// Sort the products by price, ascending.
products.sort((x1, x2) => x1.price - x2.price);
console.log(products);