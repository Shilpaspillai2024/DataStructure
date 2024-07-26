// function palindrome(str){
//    let strrev=''
//    for(let i=str.length-1;i>=0;i--){
//     strrev+=str[i]
//    }
//    if(str===strrev){
//     return "palindrome"
//    }
//    return "notpalindrome"

// }

// console.log(palindrome('malayalam'))


// or


// function palindrome(str){
//     let len=str.length

//     for(let i=0;i<len/2;i++){
//         if(str[i]!==str[len-1-i]){
//             return "not palindrome"
//         }
//     }
//     return "palindrome"
// }
// console.log(palindrome('malayalam'))
// console.log(palindrome('car'))


// using recursion

function palindrome(str){
    if(str.length<=1){
        return "palindrome"
    }
    if(str[0]===str[str.length-1]){
        return palindrome(str.slice(1,-1))
    }
    return "not palindrome"
}

console.log(palindrome('malayalam'))
 console.log(palindrome('car'))


