// 4. CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// -name
// -kind
// -speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog Bonnie says: ‘Hey bro!!!’”

let Animal = {
    name: "Rex",
    kind: "Dog",

    speak: function() {
        let speak = "Hey bro!!!";
        return speak;
    }
    
} 

console.log(`${Animal.kind} ${Animal.name} says: ${Animal.speak()}`); 