
let sum1 = 0
let sum2 = 1
let sum3 = 0

function fibonacci(){
    while(sum3<=4000000) {
    if(sum3 > 4000000){
        break;
    } else {
    sum3 = sum1 + sum2
    sum1=sum2
    sum2=sum3
    };
    if(sum1 % 2 == 0 ){
        continue
    }
    }
    console.log(sum1)
}
console.log(fibonacci())