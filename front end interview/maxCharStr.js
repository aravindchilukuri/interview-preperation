const maxStr = (str) => {
let obj = {};
for ( let char of str) 
    (!obj[char]) ? obj[char] = 1 : obj[char]++;
    let maxNum = 0;
    let maximumChar = ''    

    for (let char of obj) {
        if(obj[char] >= maxNum) {
            maxNum = obj[char];
            maximumChar = char;
        }
       
    }
    
    console.log(`${maximumChar} apperar ${maxNum}`)

}


maxStr('aravind')