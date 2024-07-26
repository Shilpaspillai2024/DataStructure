// fibonacci series

// function fib(n){
//     if(n<=0) return []
//     if(n===1) return [0]
//     if(n===2) return [0,1]

//    let fib=[0,1]

//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

//recursion finonacci

// function fib(n){
//    if(n<2){
//     return n
//    }
//    return fib(n-1)+fib(n-2)
// }


// console.log(fib(10))

//palindrome recursion


function palindrome(str){
    if(str.length<=1){
        return "palindrome"
    }
    if(str[0]===str[str.length-1]){
        return palindrome(str.slice(1,-1))
    }
    return "not palindrome"
}

console.log(palindrome("race"))


// remove duplicates from array

function removedupli(nums){

    let arr=[]

    for(let i=0;i<nums.length;i++){
        if(arr.indexOf(nums[i])===-1){
            arr.push(nums[i])
        }
    }
    return arr

}
console.log(removedupli([2,4,5,4,6,6,3,7]))