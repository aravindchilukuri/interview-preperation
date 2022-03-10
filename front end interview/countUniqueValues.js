function countUniqueValue(arr) {
  let a = [...new Set(arr)];
  console.log(a.length);
}

countUniqueValue([2, 3, 5, 2, 1, 4, 4, 3, 2, 3, 22, 2, 1, 1]);

function countUniqueValue(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== a[j]) {
      i++;
      a[i] = a[j];
    }
  }
}
