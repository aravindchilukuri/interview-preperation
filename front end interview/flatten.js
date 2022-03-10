/* flatten which accepts an array of arrays and retruns a new array with all values flattend --*/

function flatten(arr) {
  let flattenArray = [].concat.apply([], arr);
  let flattenArrayTwo = arr.flat(1); //inbuilt method
  // console.log(flattenArrayTwo);
  return flattenArray;
}

function customFlattenArray(arr, depth = 3) {
  let result = [];

  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlattenArray(ar, depth - 1));
    } else {
      result.push(ar);
    }
  });
  return result;
}

console.log(customFlattenArray([1, [2, [3, 4], [[5]]]]));
