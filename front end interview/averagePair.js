function averagePair(arr,value) {
let start = 0;
let end = arr.length -1;
while(start < end) {
    let average = arr[start] + arr[end] / 2;
    if(average === value) {
        return true;
    } else if(average < value) {start ++;}
else {
    end --
}
}
return false
}


console.log(averagePair([3,2,1,3,5,2,35,4,52,1,4],3))
