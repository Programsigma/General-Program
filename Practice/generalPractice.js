
let Matrix = [11,2,4,4,5,6,10,8,-12]
let matrixSize = Math.sqrt(Matrix.length)
let negativeSumValue = 0
let positiveSumValue = 0
let squareDifference = 0


function negativeSum(ar){
    let i = 0
    while(i < matrixSize){
        negativeSumValue = negativeSumValue + ar[4*i]
        i++
     }
   return negativeSumValue
    }
function positiveSum(ar){
    let i = 0
    while(i < matrixSize){
        positiveSumValue = positiveSumValue + ar[(2) + 2*i] // needs fixed, outputs 0
        i++
        }
        return positiveSumValue
    }
    
    
function squareDiff (ar){
    positiveSum(ar);
    negativeSum(ar);
    console.log("Square Difference" , (positiveSumValue - negativeSumValue))
}
squareDiff(Matrix)
