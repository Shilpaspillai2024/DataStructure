// function power(n){
//     if(n<1)return false

//     while(n>1){
//         if(n%2!==0)
//             {
//             return false
           
//         }
//         n=n/2
//     }
//     return true
// }

// console.log(power(32))

// solution using bitwaise operator

function power(n){
    if(n<1)return false

    return (n & (n-1))===0
}

console.log(power(10))


