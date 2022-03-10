// function x() {
//    for(let i = 0 ; i < 5 ; i ++ ) {  // check with var
//        setTimeout(function() {
//            console.log(i)
//        },i*1000)
//    }
//     console.log('Aravind');
// }

// function y() {
//     for(var i = 0 ; i < 10 ; i ++ ) {
//         function close(i)  {
//         setTimeout(function() {
//             console.log(i)
//         },i*1000)
//     }
//     close(i)
//     }
//  }

/** closure the closure refrence of i soo it is pointing 
same refernce of i  so let has block scopee */

function x() {
  var b = 10;
  function c() {
    console.log(b);
  }
  c();
}
x();
