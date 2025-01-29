//These are notes on conditionals in programming 

/* conditional really is just if-> then
all of them figure out if something is true or false, and then do something based on that answer

Conditional statements rely on some form of comparison
Comparisons look like math equations
a<b
a>b
a==b
a<=b
a>=b
*/

//ex:
let a = 5;
console.log(5<3);
console.log(5>3);
console.log(53);
console.log(a = "5");

// Make a grade generator. make a variable called testGrade.
//0-59 = f
//60 - 69 = d
//70 - 79 = 

let testGrade = 65;
if (testGrade >= 90) {
    console.log   ("A") 
} else if (testGrade >= 80) {
      console.log   ("B") 
} else if (testGrade >= 70) {
    console.log   ("C") 
} else if (testGrade >= 60) {
    console.log   ("D") 
} else if (testGrade >= 0) {
    console.log   ("F") 
}

/* logical operators
Modify or combine multiple logic statements
And: && -> will return true only when both are true
Or: || -> will return true when either statement is true
Not: ! -> flips true false value

Clothing selector based on weather
Two variables: temperature and precipitation
*/ 
let temperature = 85;
let precipitation = true;

/* Options
Tshirt and shorts (above 75), Tshirt and pants (65-75), Long sleeve shirt and pants (45-64),
Sweatshirt and pants(colder than 45), jacket (instead of regular shirt if precipitation).

if (temperature > 75) {
    console.log("Tshirt and shorts")
} else if (temperature >= 65) {
    console.log("Tshirt and pants")
} else if (temperature >= 45) {
    console.log("long sleeve shirt and pants")
} else if (temperature >= 65) {
    console.log("Sweatshirt and pants")
} 
if (precipitation = true) {
    console.log("& Jacket")
}
console.log(19%3)*/
let height = 800
if (height <= 200 && height >= 160) {
    console.log ("Yes")
} else{ 
    console.log ("No")
}

/* when using logical operators restate checked variable each time
(x = 35 || 15) won't work
(x = 35 || x = 15) will work
javaScript uses "truthy and falsy" 
truthy values treated the same
following are truthy:
true
any not empty string including "false"
any number other than 0
arrays fxns and objects

Falsy:
false
0 as a number or 0n as a big int
an empty string
null
undefined
NaN

OR finds the first truthy value
ex:

let testVariable = null || 1 || false;
console.log(testVariable)

Puts out 1, or the 1st true value
If everything is falsy, ouput is the last value in the || list.*/
