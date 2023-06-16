// 1. Create a function called tellStory()
// The function should 3 strings as arguments: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory(name, mood, activity) {
    alert(`This is ${name}. ${name} likes ${activity} very much. Today he is ${mood}. The weather is sunny and he is playing ${activity} all day.`)
}
tellStory("Nikola", "happy", "basketball");