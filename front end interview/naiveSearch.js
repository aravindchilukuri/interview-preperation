// function naiveSearch(long, short) {
// var count = 0;
// for(var i = 0; i< long.length; i++) {
//     for (var j = 0; j < short.length;j++) {
//         if(long[i+j] !== short[j]) {
//             break;
//         } if (j === short.length-1) {
//             count++;
//         }
//     }
// }
// return count;
// }

function naiveSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
    return count;
  }
}
