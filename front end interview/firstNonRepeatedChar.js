function fristNonRepeatedChar(str) {
    for(var i = 0; i < str.length;i++) {
        var c = str.charAt(i);
        if(str.indexOf(c) == i && str.indexOf(c,i+1) == -1) {
            return c;
        }
    }
    return null;
 }



 function nonRepatedStringInChar(str) {
     for(var i = 0;i<str.length;i++) {
         c = charAt(str);
         if(str.indexOf(c) == i && str.indexOf(c,i+1) == -1) {
             
         }
     }
 }



 console.log(fristNonRepeatedChar('the quick brown fox jumps then quickly blow air'))