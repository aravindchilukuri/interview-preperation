function sortingfunc(arr) {
    var done = false;
    while(!done) {
         done = true;
        for(let i = 1; i<arr.length; i++) {
            if(arr[i-1]>arr[i]) {
                done = false;
                var tmp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return true;
}