// 3.  Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// and will add the "\n" new line after every even number otherwise it will add " " empty space.
// How it should look in the console: 
// 1 2
// 3 4
// 5 6
// 7 8
// 9 10
// 11 12
// 13 14
// 15 16
// 17 18
// 19 20

function range() {
  let result = "";
  for (let i = 1; i <= 20; i++) { 
    let even = i%2==0;
    if (i%2==0) {
        even = "\n"; 
    } else { 
        even = " ";
    };
    result += `${i}${even}`;
  }
  console.log(result);
}

range();