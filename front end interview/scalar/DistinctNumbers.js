function distinctNumber(A, B) {
  let ans = new Array(0);
  // Creates an empty hashMap hM
  let hM = new Map();

  // Traverse the first window and store count
  // of every element in hash map
  for (let i = 0; i < B; i++) {
    if (hM.has(A[i])) hM.set(A[i], hM.get(A[i]) + 1);
    else hM.set(A[i], 1);
  }

  // Print count of first window
  ans.push(hM.size);

  // Traverse through the remaining array
  for (let i = B; i < A.length; i++) {
    // Remove first element of previous window
    // If there was only one occurrence
    if (hM.get(A[i - B]) == 1) {
      hM.delete(A[i - B]);
    } else {
      // reduce count of the removed element
      hM.set(A[i - B], hM.get(A[i - B]) - 1);
    }
    // Add new element of current window
    // If this element appears first time,
    // set its count as 1,
    if (hM.has(A[i])) {
      hM.set(A[i], hM.get(A[i]) + 1);
    } else {
      hM.set(A[i], 1);
    }
    ans.push(hM.size);
  }
  return ans;
}

A = [1, 2, 1, 3, 4, 3];
B = 3;

console.log(distinctNumber(A, B));
