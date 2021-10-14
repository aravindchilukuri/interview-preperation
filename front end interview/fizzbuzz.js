/* write program for multiples of 3 write fizz 
for multiples of 5 buzz, for 3 & 5 fizzbuss*/

const fizzBuzz = (n)=> {
    for(let i = 0; i <= n; i++) {
        if(i%3 === 0) {
            console.log('fizz')
            ++i;
        } if(i%5 === 0) {
            console.log('buzz')
            ++i
        } else if(i%3 === 0 && i % 5 === 0) {
console.log('fizzbuzz')
++i
        } else {
            console.log(i)
        }
     }
}

console.log(fizzBuzz(20))
