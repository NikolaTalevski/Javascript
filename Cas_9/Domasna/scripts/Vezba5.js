// 5. Call the https://jsonplaceholder.typicode.com/ api to get one todo on click of a button
// Link: https://jsonplaceholder.typicode.com/todos
// Print the id, title and if completed print Completed, else print Not Completed.

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetchToDo();
});

function fetchToDo() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
            let users = json;
            let toDo = users[Math.floor(Math.random() * users.length + 1)];
            console.log(toDo.id);
            console.log(toDo.title);
            toDo.completed ? console.log("Completed") : console.log("Not Completed");
        })
    .catch((error) => console.log(error.message))
    .finally(() => console.log(":)" + new Date().toString()));
}
