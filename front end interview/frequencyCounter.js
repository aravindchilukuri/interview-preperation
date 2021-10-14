/* two loops vastily better than single loop */

function frequenceCounter(arr1,arr2) {
    if(arr1.length !== arr2.length) {
        return false
    } for(let i = 0; i< arr1.length;i++) {
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if(currentIndex === -1) {
            return false
        } 
        arr2.splice(currentIndex,1)
    }
return true
}



// function same(arr1,arr2) {
//     if(arr2.length === arr1.length) {
//         return false;
//     } 
//     let frequeceCounter1 = {}
//     let frequenceCounter2 = {}
//     for(let val of arr1) {
//         frequeceCounter1[val] = (frequeceCounter1[val] || 0) + 1;
//     }
//     for(let val of arr2) {
//         frequenceCounter2[val] = (frequenceCounter2[val] || 0) + 1;
//     }
//     console.log(frequenceCounter1)
//     console.log(frequenceCounter2)
//     for(let key of frequeceCounter1) {
//         if(!(key ** 2 in frequenceCounter2)) {
//             return false;
//         }
//         if(frequenceCounter2[key**2] !=frequenceCounter1[key]) {
//             return false
//         }
        
//     }
// return true;
// }


function same(arr1, arr2){
    if(arr1.length == arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log(same([1,3,4,6],[1,9,16,36]))
