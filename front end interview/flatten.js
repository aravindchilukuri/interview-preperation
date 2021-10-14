/* flatten which accepts an array of arrays and retruns a new array with all values flattend --*/

function flatten(arr) {
let flattenArray = [].concat.apply([],arr)
// let flattenArrayTwo = arr.flat(1) inbuilt method
console.log(flattenArrayTwo)
return flattenArray;
}




function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}



console.log(flatten([1, [2, [3, 4], [[5]]]]))

