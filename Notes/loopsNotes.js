// /* loops are a great way for us to repeat a set of steps.
// If you have something you want to do multiple times in a row,
//  or until something happens, loops are an ideal solution

//  Two types of loops
//  -While loops
//  -For loops

//  While loops:
//  while(condition) {
//     // code goes here
//  }

//  code will repeat as long as the condition is true.

//  ex:  */
//  let i = 0;
//  while (i<3){
//     console.log(i);
//     i++; // shorthand for i += 1, a shorthand for i=i+1
//  }

//  /* a single time through a loop is called an iteration.
//  while loops will continue until their condition become falsy
//  Remember, 0 is falsy */

//  // i is already 3 because of the prior loop

//  while(i) {
//     console.log("banana")
//     i--
//    }
//    /* there is a second version of while called a do . . . while loop
//    main dif is that a do . . . while loop will always execute at least once.

//    Do . . . While:

//    do { 
//    // code goes here
//    }  while (condition)
//      */ 

//    let a = 0
//    do{
//       a += 1
//    } while (a<-1)

// /* other kind is for, js fancy while loops, more commonly used
// Structure
// for(begin;condtion;step) {
//    //Code goes here
// }
// ex: */ 
// for (let j = 0; j < 5; j++){
//    console.log(`j = ${j}`);
// }

// /* with another form of loop as a general rule, if your condition is going to be based on a #, you probably want to use >, <, <=, >=
// == != are likely to let you make an infinite loop

// youll also sometimes be off by one, js change between < or <=

// /* You CAN skip elements of the for loop declaration.  For example:

// let i = 0;

// for(; i < 3; i++) {
//     console.log(i);
// }

// ***********************

// for(let i = 0; i < 3;){
//     console.log(i++);
// }

// ************
// let i = 0

// for(; i < 3 ;){
//     console.log(i);
//     i++;
// }
//     \

// ********************
// for(;;){
//     //THIS IS AN INFINITE LOOP
// }

// */

// /* BREAK as a command
// break is command that will immediately exit you from a loop, 
// and advance to the next part of your code.  You can put breaks in
// as failsafes if you think you might create an infinite loop.*/

// //Example 1: sum numbers from the user
// // let sum = 0;
// // while (true){
// //     let value = +prompt("Enter a number", '');

// //     if(!value){
// //         break;
// //     }

// //     sum += value;
// // }
// // console.log('sum = ' + sum);

// // Example 2:  add numbers from 1 to a given value WITH a timeout function
// // let sum = 0;
// // let max = +prompt("Add the numbers from 1 to what?");
// // let now = Date.now();
// // console.log(now);

// // for (let i = 1; i <= max; i++){
// //     sum += i;

// //     if (Date.now() > now + 1000){
// //         console.log("This took too long");
// //         break;
// //     }
// // }

// // console.log(sum);

// /* CONTINUE as a command
// Continue is like a "lighter" version of break.  Instead of ejecting you 
// out of the loop, it just skips to the end of the current iteration.  */
// //Example:  print just the odd numbers from 1 to 20:

// // for (let i = 0; i < 21; i++) {
// //     if (i % 2 == 0){
// //         continue;
// //     }
// //     console.log(i);
// // }




// // SUMMARY:
// // THREE KINDS OF LOOP: For, While, Do...While
// // A Do...While loop is the only one of these that MUST execute at least once
// // break - will eject from the loop altogether
// // continue - skip the rest of the current iteration




// /* ARRAYS
// In programming, an array is a collection of values.  Specifically, it's an 
// "ordered" collection of values.  

// let arrayName = [item1, item2, item3, item4];

// to make an empty array, there are two approaches:
// let fakeArray1 = new Array();
// let fakeArray2 = [];
// */

// // let fruits = ["Apples", "Bananas", "Canteloupes", "Durians", "Lychees"];
// // console.log(fruits);

// // console.log(fruits[3]); // "Durians", b/c we start indexing from 0.

// // fruits[3] = "Watermelons";
// // console.log(fruits);

// // //add strawberries
// // fruits[5] = "Strawberries";
// // console.log(fruits);

// // // find out how long an array is (how many elements are in it?):
// // console.log(fruits.length);

// // fruits[fruits.length] = "Dragonfruits";
// // console.log(fruits);

// // fruits[fruits.length] = "Blueberries";
// // console.log(fruits);

// // /* an array can store elements of any type.  Including, mixing types 
// // in the same array*/

// // let exampleArray2 = ["Apple", 35, true, function() {console.log('hello');}, "array"];

// // console.log(exampleArray2[0]);
// // console.log(exampleArray2[1]);
// // console.log(exampleArray2[3]);

// /*do math or other operations with the values in an array */
// // function to calculate the distance between 2 points on the x-y plane.
// // dist = sqrt((x2 - x1)^2 + (y2 - y1)^2)
// let obj1 = [3,5];
// let obj2 = [7, 11];

// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2);
// console.log(dist);

// let primes = [2, 3, 5, 7, 11, 13, 17];
// let i = 0;
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
// }

// Array Methods
// .pop

// let sum = 0
// while(primes.length > 0) {
//    sum += primes.pop()
//    console.log (primes, sum)
// }

// console.log(sum)

// inverse of .pop is .push
// .push adds an element to the end of the array

// let fruits = ("apple", "banana", "canteloupe")
// console.log (fruits)


// the problem with .pop and .push us that you can only modify the end of the array
//  to mod the beginning you need different methods

// shift - pop but at the beginning
// unshift - push but at the beginning

//  push and unshift can add multiple elements at once
// fruits.push("orange", "peach")
// fruits.unshift("lemon", "pineapple")
// console.log(fruits)

// Using Loops with arrays
//  old style of printing all array values

// for(let i = 0; i< fruits.length; i++){
//    console.log(fruits[i])
// }

// there is a different way to do this using a for . . .  of loop;

// for(let fruit of fruits) {
//    console.log(fruit)
// }

// things to note about arrays:
/* array.length is returning the value of the last index +1, it's
not actually counting the number of values in the array
*/
// let grades = ["A", "A", "B", ,"B", "A"]
// console.log (grades)
// console.log(grades.length)

/* Multi Dimensional Arrays*/
// A multi dimesional array is an array made out of more arrays

// Array holding x,y coordinates of 5 points
// 3,4 | 1,2 | 9,15 | 37,11 | 215,1
// let coordinates = [
//       [3,4],
//       [1,2],
//       [9,15],
//       [37,11],
//       [215,1],
// ]

// console.log(coordinates[4][0])
// coordinates[4][0] = 21
// console.log(coordinates[4][0])

// // Methods are functions tied to a datatype

// // ex: arr.pop is the pop method, it removes the last item of the array

// // Learned 4 array methods: pop, push, shift, and unshift.
// // arr.length not technically a method as it doesn't have the parentheses

// // arr.at works like square bracket notation, but allow negative indicies
// // ex: [a,b,c,d,e,f,g]=> arr.at(-2)=> "f"

// // New Methods:

// /* .join => lets us combine terms of an array into a string and specify the seperator
// */

// // Ex:

// let arrayForString = ["A", "B", "C", "D"]
// console.log(arrayForString.join()) // output single string connected by commas
// console.log(arrayForString.join(" o.O ")) // outputs A o.O B o.O C o.O D

// // more methods:
// /* concat( ) => short for concatenate, combines arrays
// */

// // Mike Brady marries Carol Martin
// let mikesSons = ["Greg", "Peter", "Bobby"];
// let carolsDaughters = ["Marcia", "Jan", "Cindy"];
// let bradyBunch = mikesSons.concat(carolsDaughters)
// console.log(bradyBunch)

// Final 2 methods:
/*.splice and .slice
splice = adds new items to array
slice = removes a piece of an array

splice ex:
*/

// let fruits = ["Apple", "Orange", "Banana", "Kiwi"]
// // fruits.splice(2,0, "Mango", "Papaya")
// // console.log(fruits)
// // .splice(tagetindex, howMany items to be removed after the insertion , stuff to be added)

// fruits.splice(2,0, "Mango", "Papaya")
// console.log(fruits)
// fruits.splice(3,1)
// console.log (fruits)

// // .slice returns a new array from a subsection or slice of an original array
// let fruitILike = fruits.slice(1, 4)
// console.log(fruitILike)

/* Strings behave a lot like arrays and have some similar methods.
ex: string.length = length of string
*/

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(alpha.charAt(2))
 console.log(alpha.at(20)) // .at is a recent addition, it allows negative indices, charAt does not
 console.log( alpha[12])

//  if you put in a value that doesn't exist, like alpha[28], it will give back undefined
// charAt and at will both give out an empty string

// ALSO: observe this example:
alpha[1] = "Q"
console.log (alpha)
// Square brackets only let us read whats there, not change it

/* 3 methods to remove part of a string
.slice(start, end)
 substring(start, end) // values less than zero treated as zero

 * for both of these if you omit the end value it goes to the end of the string
 .substr(start, length)
*/
 let testString = "The quick brown fox jumped over the lazy dog"
 let string1 = testString.slice(-5, -1)
 let string2 = testString.substring(-5,-1)
 let strinhg3 = testString.substr(3,10)
 console.log(string1)
 console.log(string2)
 console.log(strinhg3)

 /* two final string string methods:
 .toUpperCase() = string uppercase
 .toLowerCase() = string lowercase
*/
let teststring2 = "ThE QUIck Brown FOX jumPEd"
console.log(teststring2.toUpperCase())
console.log(teststring2.toLowerCase())
