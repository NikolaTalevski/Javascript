// 2. Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let title = document.getElementById("myTitle");
title.innerText = "Cool page !!!";

let p1 = document.querySelector(".paragraph");
p1.innerText = "This exercise is pretty easy to solve!!!";

let p2 = document.querySelectorAll("p")[1];
// Vaka go targetirav, zatoa sto ima prazno mesto vo imeto na klasat vo html, pa ne mozi preku klasa da se targetira.
p2.innerText = "Really, it is easier than i thought!!!";

let title2 = document.querySelectorAll("h1")[1];
title2.innerText = "Yes, your're right. This should be changed!!!";

let title3 = document.querySelector("h3");
title3.innerText = "Don't forget, also this should be changed!!!";

