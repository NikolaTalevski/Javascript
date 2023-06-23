// 5. Create two arrays, one with numbers, and one empty. Then fill the empty array with the same numbers from the first array 
// but with oposite order. Use while or for. Example:
// firstArray = [1, 2, 3, 4, 5];
// secondArray = [5, 4, 3, 2, 1];

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [];

for (let i=0; i < firstArray.length; i++) {
    secondArray.push(firstArray[firstArray.length - i - 1]);
}

console.log(secondArray);