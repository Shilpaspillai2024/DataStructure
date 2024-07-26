function fibonacci(n){
   if(n<=0) return "invalid"
   if(n===0) return[0] 
   if(n===1) return [0,1]

   let fib=[0,1]
   for(let i=2;i<n;i++){
      fib[i]=fib[i-1]+fib[i-2]
   }
   return fib

}

console.log(fibonacci(5))

// recursion fibonacci


// function fibRec(n){
//    if(n<2) return n
   
// return fibRec(n-1)+fibRec(n-2)

// }

// console.log(fibRec(6))

