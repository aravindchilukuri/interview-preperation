//return the sum of all even numbers in an object which may contain nested objects

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

function nestedEvenSum(obj1,sum =0) {
for(var key in obj1) {

    if(typeof obj1[key] === 'object') 
    {
        sum += nestedEvenSum(obj1[key])
    }else if(typeof obj1[key] === 'number' && obj1[key] % 2 === 0) {
        sum +=obj1[key]
    }
}
return sum;
}

console.log(nestedEvenSum(obj1,sum = 0))