// function prime(n){

//  if(n<2){
//     return false
//  }
//  for(let i=2;i<Math.sqrt(n);i++){
//     if(n%i===0){
//         return false
//     }
//  }
//  return true
// }


console.log(prime(5))


//prime recursive

function prime(n,i=2){
   if(n<2){
      return false
   }
   if(n>Math.sqrt(n)){
      return true
   }
   if(n%i===0){
      return false
   }
 return prime(n,i+1)

}


