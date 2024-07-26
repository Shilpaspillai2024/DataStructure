// write a program to change the string last charachter to uppercase


// function upper(str){

//     let s=str.charAt(str.length-1).toUpperCase()
//     str=str.slice(0,str.length-1)
//     return (str+s)
// }

// console.log(upper('shilpa'))


 // Find the longest word in a string: Write a function to find the longest word in a given string, considering spaces as word separators.
//  function longestWord(str){
//       let word= str.split(' ')
//       let longest=''

//       for(let char of word){
//         if(char.length>longest.length){
//             longest=char
          
//         }
//       }
//       return longest

//  }

//  console.log(longestWord("hai shilpa you are awesome"))


 // Write a program to reverse a string using recursion: Implement a function that reverses a string by recursively swapping characters.

function reverseRecur(str){
   if(str.length<=1){
    return str
   }
   return reverseRecur(str.substr(1))+str.charAt(0)
}

console.log(reverseRecur('shilpa'))