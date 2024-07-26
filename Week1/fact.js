function factorial(n){
  let fact=1
  for(let i=n;i>0;i--)
{
  fact*=i
}
return fact
}

console.log(factorial(5))


// factorial using recursion
function factRecursion(n){
  if(n==0){
    return 1
  }
  return n*factRecursion(n-1)
}

console.log(factRecursion(4))