function findLargestSumPair(arr) {
  let first, second;
  if (arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) second = arr[i];
  }
  return first + second;
}

let arr1 = [12, 34, 10, 6, 40];
document.write("Max Pair Sum is " + findLargestSumPair(arr1));
