function mergeTwoSortArray(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

console.log(mergeTwoSortArray([1, 2, 5, 5], [4, 5, 10, 9]));

function mergedTwo(arr1, arr2) {
  let merge = [];
  let current = 0;
  let index1 = 0;
  let index2 = 0;
  while (current < arr1.lenght + arr2.lenght) {
    let unmerged1 = arr1[index1];
    let unmerged2 = arr2[index2];
    if (unmerged1 < unmerged2) {
      merge[current] = unmerged1;
      index1++
    } else if (unmerged1 > unmerged2) {
      merge[current] = unmerged2;
      index2++
    }
    current++;
  }
  return merge;
}
