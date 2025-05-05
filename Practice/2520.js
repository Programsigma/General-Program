// Hawk Tuah
// 
// let num1 = 
// const arLast = MainArray[Main array.length - 1]
// // if % = 0 print, else continue
// // i up  to 20
// let lcm= 0
// let MainArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// function LCM(num){

// }
// function Test1(a){while(ar[a] * i !== lcm ){
//     num1 = num1 * i
//     if(num1 = num2){
//         consol.log
//         break
//     }
//     i++
// }}


function Time(str){
    let STR = "01:04:34PM"
    let NM = []
    NM.push(STR.slice(0,2)*1)
    NM.push(STR.slice(3,5))
    NM.push(STR.slice(6,8))
    NM.push(STR.slice(8,10))
    console.log (NM)
    if(NM[3] == "AM" && NM[0]* 1 == 12){
    console.log(`0:${NM[1]}:${NM[2]}`)
    }
    else if (NM[3]== "PM" && NM[0]* 1 !== 12){
   let H = NM[0] + 12 
   console.log(`${H}:${NM[1]}:${NM[2]}`)
    }
    else {console.log(`${NM[0]} : ${NM[1]} :${NM[2]}  `)}}

Time()