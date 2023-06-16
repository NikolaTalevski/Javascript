// 5. Write a JavaScript program to display the reading status of some book. The object should have the next properties: 
// title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (when readingStatus is true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (when readingStatus is false).

let book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    readingStatus: true,

    info: function() {
        if (this.readingStatus == true) {
            console.log(`Already read '${this.title}' by ${this.author}.`);
        } else {
            console.log(`You still need to read '${this.title}' by ${this.author}.`)
        }
    }
}
book.info();