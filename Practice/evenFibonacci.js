
let number0 = 0
let number1 = 1
let sum3 = 0
let sum = 0

function fibonacci(){
    while(sum3<=4000000) {
     if(sum3 % 2 == 0 ){
    sum = sum + sum3;
        }
    if(sum3 > 4000000){
        break; }
     else {
    sum3 = number0 + number1
    number0=number1
    number1=sum3
    };
   
    }
    console.log(sum)
}
fibonacci()