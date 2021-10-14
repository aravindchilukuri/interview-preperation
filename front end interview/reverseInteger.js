/* 1. convert num to string
2/ turn into array
3.reverse method -js
4. back to string
5.back to int */


const reverseInteger = (num) => {
    return parseInt(num.toString().split('').reverse().join(''))
}

console.log(reverseInteger(900))