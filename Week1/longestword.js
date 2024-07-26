function longest(str){
    let s=str.split(' ')
    let long=""
    for(let i=0;i<s.length;i++){
        if(long.length<s[i].length){
            long=s[i]

        }
       
    }
    return long
}

console.log(longest("hello haiccccccccc goutham"))