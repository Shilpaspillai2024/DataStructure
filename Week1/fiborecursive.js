function recurfib(n){
   if(n<2){
    return n
   }
   return recurfib(n-1)+recurfib(n-2)
}

console.log(recurfib(6))