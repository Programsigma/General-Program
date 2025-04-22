
let Matrix = [11,2,4,4,5,6,10,8,-12]
let matrixSize = Math.sqrt(Matrix.length)
let negativeSumvalue = 0
let positiveSumvalue = 0
function positiveSum(ar){
    while(ar[i]!== undefined){
        positiveSumvalue = positiveSumvalue + ar[(Math.sqrt(ar.length)-1) + ((Math.sqrt(ar.length)-1)*i)]
        i++
    }
    return positiveSumvalue
}
function negativeSum(ar){
    while(ar[i] !== undefined){
     negativeSumValue = negativeSumvalue + ar[4*i]
     i++
   }
   return negativeSumvalue
}
function squareDiff (ar){
   squareDifference = negativeSum(ar)-positiveSum(ar)
   return squareDifference
}

console.log (squareDiff(Matrix))
