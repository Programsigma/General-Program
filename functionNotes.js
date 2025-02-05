//These are notes on functions
// A function is a set of instructions packaged together.
// particularly useful if you need to reuse instructions
// especially if you're reusing them in multiple places
// or with various "starting" conditions.
// 
// function name, parameters, arguments
// Function functionName(parameter1, 2, etc){
            // Code
// }
// 
// funtionName (argument1, argument 2, etc)

//  function that returns a message about a favorite animal

// function favoriteAnimal(animal){
//     return animal + " is my favorite animal!";
// }

// console.log(favoriteAnimal("panda"))

// What happens inside a function is frequently invisible to the outside world
// Called Scope
// Local scope is within a fxn
// Global Score is the main program

// An example to demonstrate scope

let test1 = 1;
let test2 = 5
function add1(num) {
    test2 = test2 +1
    return num + 1;
}

console.log(add1(test1))
console.log(test1)
console.log (test2)

// in summary a function can change the value of a global variable but 
// only if that variable is used by name within the function.
//  we can make optional variables
function greetings(name = "Jacson Teed"){
    console.log(`Hello, ${name}`)
}

greetings("Jackson Teed")
greetings("Jack Blanton")
greetings("Caleb 'Pookie' Smith")
greetings()