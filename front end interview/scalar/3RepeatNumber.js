module.exports = {
  /**

     * param A: list of integers

     * return: an integer

     */

  solve: function (A) {
    let val = 0;
    let n = A.length;
    A.sort();
    for (let i = 0; i < n; ) {
      let freq = 0;
     val = A[i];
      while (i < n && A[i] == val) {
        freq++;
      }
      if (freq > Math.floor(n / 3)) {
        return val;
      }
    }
    return -1;
  },
};

A = [1, 1, 1, 2, 3, 5, 7];
console.log(repeatNumber(A));
