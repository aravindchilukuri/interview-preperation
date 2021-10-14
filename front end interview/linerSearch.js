// liner search check every single item in element and comparing is linear search
// indexOf, includes, find, findIndex in linear search do linear search


function linearSearch(arr, num) {
if(arr.length > 0) {
    for (let i = 0;i< arr.length ; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
    return -1;
} 
}


console.log(linearSearch([10,15,20,25,30],15))