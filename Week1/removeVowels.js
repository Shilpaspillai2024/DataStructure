function removeVowel(str){
    let vowel='aeiouAEIOU'
    let res=''

    for(let i=0;i<str.length;i++)
    {
        if(!vowel.includes(str[i])){
            res+=str[i]

        }
    }
    return res
}

console.log(removeVowel('catherine'))