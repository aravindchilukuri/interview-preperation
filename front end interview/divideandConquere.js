/* value of the index in the given array */ 
/* binary search */

// const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b){return b - a});

// points.sort((a,b) => {
//     return a-b;
// })

// console.log(points)



function search(arr,val) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let mid = Math.floor((min+max)/2);
        let currentElement = arr[mid];

        if(arr[mid] < val) {
            min = mid + 1;
        } else if(arr[mid] > val) {
            max = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

console.log(search([40, 100, 1, 5, 25, 10],1));