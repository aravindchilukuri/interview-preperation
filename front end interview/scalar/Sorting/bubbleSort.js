/* build it javascript sorts 
the built in sort method accepts an optional comparator function
*/

/* for sorting in javascript */

function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);

/* Bubble Sort: A sorting algorithm where the largest values bubble up to the top */

function bubbleSort(arr) {
  var noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    ////// better solution    for(let i = arr.length;i > 0 ; i--) { for var j = 0; j < i -1 ; j++ }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]; //// ES5 things, if(arr[i] > arr[j+1]) {}
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      if (noSwaps) break;
    }
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([23, 2, 1, 3, 5]));
