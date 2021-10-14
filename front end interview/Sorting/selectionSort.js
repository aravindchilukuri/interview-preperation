function selectionSort(sortArray) {
  for (var i = 0; i < sortArray.length; i++) {
    /// intiail array index
    var lowest = i; // some temp
    for (var j = i + 1; j < sortArray.length; j++) {
      // initial array + 1 index
      if (sortArray[j] < sortArray[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = sortArray[i];
      sortArray[i] = sortArray[lowest];
      sortArray[lowest] = temp;
    }
  }
  return sortArray;
}

selectionSort([32, 21, 34, 1, 2, 12, 44]);
