function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    // looping over the array.
    var currentValue = array[i]; // intial value to current
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort([2, 4, 12, 19, 1, 0, 5]));
