// 4. Title generator:
// Create 3 inputs:
// Color
// FontSize
// Text
// Create a button for generating titles
// When the button is clicked generate a new h1 element with the color, font size and text from the inputs


function title() {
    let Title = document.createElement("h1");
    document.body.appendChild(Title);

    let color = document.getElementById("color").value;
    Title.style.color = color;

    let fontsize = document.getElementById("fontsize").value;
    Title.style.fontSize = fontsize + "px";

    let text = document.getElementById("txt").value;
    Title.innerHTML = text;

    
}

document.getElementById("btn");
btn.addEventListener(("click"), () => {
    title();
});
document.body.appendChild(btn);
