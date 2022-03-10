function binarySearch(arr, ele) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== ele && start <= end) {
    if (ele < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  if (arr[middle] === ele) {
    return arr[middle];
  }
  return -1;
}

console.log(binarySearch([40, 100, 1, 5, 25, 10], 100));
