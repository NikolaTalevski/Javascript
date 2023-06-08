// Uslovi

// I NACIN - IF ELSE ELSE IF

// if (uslov)
// {
    // naredba
// }
/* */

// var broj = 4;

// if(broj>=10) {
//     console.log("Ovoj broj e pogolem ili ednakov na 10");
// } else {
//     console.log("Ovoj broj ne e pogolem ili ednakov na 10");
// }


// var novBroj = 7;
// if(novBroj%2==0) {
//     console.log("Ovoj broj e paren");
// } else {
//     console.log("Ovoj broj e neparen");
// }


// var novBroj2 = parseInt(prompt("Vnesi broj:"));
// if  (novBroj2 == 0) {
//     console.log("Nulata ne e nitu paren nitu neparen broj");
// }
// else if
//     (novBroj2 % 2 == 0) {
//         console.log("Ovoj broj e paren");
// }
// else {
//     console.log("Ovoj broj e neparen");
// }


// if ((5>3) && (2>4)) {
//     console.log("Dvata iskazi se tocni");
// }
// else {
//     console.log("Ne se dvata iskazi tocni");
// }


// if ((10>9) && (4<7) && (9>12)) {
//     console.log("Se e tocno");
// } else {
//     console.log("Ne e se tocno");
// }



// var money = parseInt(prompt("Kolku pari imas?"));
// if (money<20) {
//     console.log("You can't buy anything!");
// } else if (money>20 && money<50) {
//     console.log("You can buy candy!");
// } else if (money>50 && money<200) {
//     console.log("You can buy milk!");
// } else if (money>200) {
//     console.log("You can buy bagpack!");
// }



// var poeni = parseInt(prompt("Poeni?"));
// if (poeni>=91 && poeni<=100) {
//     console.log("10ka");
// } else if (poeni>=81 && poeni<=90) {
//     console.log("9ka");
// } else if (poeni>=71 && poeni<=80) {
//     console.log("8ka");
// }else if (poeni>=61 && poeni<=70) {
//     console.log("7ka");
// }else if (poeni>=51 && poeni<=60) {
//     console.log("6ka");
// }else if (poeni<=50)  {
//     console.log("Ne polozhi");
// }

//--------------------------------


// II NACIN - Ternary operator ? :  - posle prasalnik se pisuva naredba za if, a posle dve tocki se pisuva naredba za else !!

// uslov ? naredba : naredba2 

// if(uslov) {
//     naredba;
// } else {
//     naredba2;
// }

//Primer:

// var brojZaTernaryOperator = 8;
// var iskaz = brojZaTernaryOperator%2 == 0 ? "Paren broj" : "Neparen broj"; // ? == if , : == else
// console.log(iskaz);

// var iskaz2 = brojZaTernaryOperator == 0 
//     ? "Nitu paren nitu neparen broj" 
//     : brojZaTernaryOperator%2 == 0 
//     ? "Paren broj" 
//     : "Neparen broj";
// console.log(iskaz2);


// var money = parseInt(prompt("Kolku pari imas?"));
// if (money<20) {
//     console.log("You can't buy anything!");
// } else if (money>20 && money<50) {
//     console.log("You can buy candy!");
// } else if (money>50 && money<200) {
//     console.log("You can buy milk!");
// } else if (money>200) {
//     console.log("You can buy bagpack!");
// }

// var moneyTernary = parseInt(prompt("Kolku pari imas>"));
// var iskaz3 = moneyTernary<20 ? "You can't buy anything" : moneyTernary>20&&moneyTernary<50 ? "You can buy candy" : moneyTernary>50&&moneyTernary<200 ? "You can buy milk" :  "You can buy bagpack";
// console.log(iskaz3);



// III NACIN - SWITCH

// var someValue = 10;

// switch(someValue) {
//     case 1: 
//         console.log("Brojot e 1"); 
//         break;
//     case 2: 
//         console.log("Brojot e 2"); 
//         break;
//     case 10: 
//         console.log("Brojot e 10"); 
//         break;
//     default: 
//         console.log("Nisto ne e tocno"); 
//         break;
// }


var day = parseInt(prompt("Vnesi broj od 1 do 7"));

switch(day) {
    case 1:
        console.log("Monday");
        break; 
    case 2:
        console.log("Tuesday");
        break; 
    case 3:
        console.log("Wednesday");
        break; 
    case 4:
        console.log("Thursday");
        break; 
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break; 
    case 7:
        console.log("Sunday");
        break; 
    default:
        console.log("Greska!!!");
        break;    
}