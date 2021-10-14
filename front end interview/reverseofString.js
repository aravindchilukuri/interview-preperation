// function reverseOfString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverseOfString('Aravind'))


// function reverseString(str) {
//     var revStr = '';
//     for(var i = str.lenght - 1 ; i >=0 ; i--) {
//         revStr +=str[i];
//     }
//     return revStr;
// }

//  ----------------------------
// Reverse of words


// function ReverseWords(str) {
//     var words = [];
//     words = str.match(/\S+/g);
//     var result = "";
//     for(var i = 0;i<words.length;i++) {
//         result += words[i].split('').reverse().join('') + " ";
//     }
//     return result;
// }

// console.log(ReverseWords('Aravind chilukuri'))
// console.log(reverseString('aravindchilukuri'))



/* ------ Reverse in place ---- */

function reverseInPlace(str) {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(reverseInPlace('ABCDE  FGHIJK'))