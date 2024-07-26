function searchString(str,target){

    for(let i=0;i<str.length-1;i++){
        if(str[i]===target){
            return i
        }
    }
    return -1


}
// console.log(searchString(['apple','pineapple','oragnge','grape'],'magngo'))


// search char in string

function searchChar(str,t){
    for(let i=0;i<str.length-1;i++){
        if(str[i]===t){
            return i
        }
    }
    return -1

}
// console.log(searchChar('kiran','h'))



// search second occurance of the char in a string

function firstOccurence(str,t){
    let count=0

    for(let i=0;i<str.length-1;i++){
        if(str[i]===t){
            count++
            if(count===2){
            return i
            }
            
        }

    }
    return -1

}
// console.log(firstOccurence('iam shilpa here','a'))


// count the couurence of a charachter
function countOccurence(str,t){

    let count=0

    for(let i=0;i<str.length;i++){
        if(str[i]===t){
            count++
            
        }
    }
    return count

}
console.log(countOccurence('meenakumai','m'))


// count the charcters in a word


function charCount(word){
    let countChar={}

    for(let char of word){
        if(countChar[char]){
            countChar[char]++
        }else{
            countChar[char]=1
        }

    }
    return countChar
    
}


// console.log(charCount('shilpaap'))


// remove vowels from string


function removeVowels(str){
    let vowels='aeiouAEIOU'
    let result=''

    for(let i=0;i<str.length;i++){
        if(!vowels.includes(str[i])){
            result+=str[i]

        }
    }
    return result
}

// console.log(removeVowels('appletree'))


// recursion reverse string

function reverseStr(str){
    if(str.length<=1){
        return str
    }
    return reverseStr(str.substring(1))+str.charAt(0)
}

// console.log(reverseStr('shilpa'))


// paindrome string

function palindrome(str){
    let len=str.length

    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return "not palindrome"
        }
       
    }
    return "palindrome"

}

// console.log(palindrome("malayalam"))
// console.log(palindrome("car"))


// palindrome recursive

function recursionPalin(str){

    if(str.length<=1)
    {
        return "palindrome"
    }

    if(str[0]===str[str.length-1]){
        return recursionPalin(str.slice(1,-1))
    }

    return "not palindrome"
}

// console.log(recursionPalin("malayalam"))