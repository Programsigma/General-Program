//These are notes on functions
// A function is a set of instructions packaged together.
// particularly useful if you need to reuse instructions
// especially if you're reusing them in multiple places
// // or with various "starting" conditions.
// // 
// // function name, parameters, arguments
// // Function functionName(parameter1, 2, etc){
//             // Code
// // }
// // 
// // funtionName (argument1, argument 2, etc)

// //  function that returns a message about a favorite animal

// // function favoriteAnimal(animal){
// //     return animal + " is my favorite animal!";
// // }

// // console.log(favoriteAnimal("panda"))

// // What happens inside a function is frequently invisible to the outside world
// // Called Scope
// // Local scope is within a fxn
// // Global Score is the main program

// // An example to demonstrate scope

// let test1 = 1;
// let test2 = 5;
// function add1(num) {
//     test2 = test2 +1
//     return num + 1;
// }

// console.log(add1(test1));
// console.log(test1);
// console.log (test2);

// // in summary a function can change the value of a global variable but 
// // only if that variable is used by name within the function.
// //  we can make optional variables
// function greetings(name = "Jacson Teed"){
//     console.log(`Hello, ${name}`);
// }

// greetings("Jackson Teed");
// greetings("Jack Blanton");
// greetings("Caleb 'Pookie' Smith");
// greetings();

// Anonymous Function. Anonymous functions frequently used if a 
// function expects to take another function as a parameter.
// Means that function does not have function name
// ex. failed didn't call it

// (function(){
//     alert ("this is an anonymous function");
// })

// // ex. actual ex. of anonymous function.
// function logKey(event) {
//     console.log (`You pressed the "${event.key}"`)
// }

// this.addEventListener("keydown", logKey)

// thats how we'd normally do this
// we can use anonymous instead

// this.addEventListener("keydown", function (event) {
//     console.log(` you pressed ${event.key}`);
// })

// // Another way is the arrow function

// this.addEventListener("keydown", (event) => {
//     console.log(` you pressed ${event.key}`);
// })
//  an example to examine scope
// let x=1;
// function a() {
//     let y = 2;
//     output(x);
//     output(z);
// }

// function b() {
//     let z = 3;
//     output(x);
//     output(y);
// }

// function output(value) {
//     console.log(`Value = ${value}`);
// }

// a();
// b();
// 
// Functions can have return values, where the function sends something 
// back to the global scope.
// Some functions don't have a return value.

function randomLessThan(num) {
    let x = Math.floor(Math.random() * num)
    return x;
}

console.log(console.log(randomLessThan(10)));

randomLessThan(4)

// produce a number between 1 and 4
console.log(randomLessThan(4)+1)

// If you want a fxn to interact with something else,
//  you usually need a return value