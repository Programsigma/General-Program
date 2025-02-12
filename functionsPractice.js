// Practice
//1.
function multiply(num1,num2) {
    console.log(`This Equals ${num1* num2}`)
}




function checkAge(age) {
    if (age > 18){
        return true;
    } else {
        return confirm('Did parents allow you?')
    }
}

checkAge(20);

function checkAge(age) {
    if (age > 18){
        return true;
    }
    return confirm('Did parents allow you?')

}


//2. No

//3.
function checkAge(age) {
    (age > 18, console.log("true")) || (age <= 18, console.log("Did your parents allow?")) || NaN
}

checkAge(22)
