function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}


/*--- collect odd values --*/

function collectionOddValues(arr) {
    let newArray  = []
    if(arr.length === 0) {
        return newArray;
    }
    if(arr[0]% 2 !==0) {
        newArray.push(arr[0])
    }
    newArray = newArray.concat(collectionOddValues(arr.slice(1)))
    return newArray
}


/*--- power --- */

function power(base,exponent) {
if(exponent === 0) {
    return 1;
} return base * power(base,exponent - 1)
}

function factorial(num) {
    if(num === 1) {
        return 1;
    } return num * factorial(num-1)
}


function productOfArray(arr) {
if(arr.length === 0) {
    return 1;
}  
 return arr[0] * productOfArray(arr.slice(1))
}


function recursiveRange(num) {
if(num === 0) {
    return 0;
} return num + recursiveRange(num-1)
}

console.log(recursiveRange(6))