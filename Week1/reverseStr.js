function reverse(str){
    //using in built methods
    // return str.split('').reverse().join('')

    // without inbuilt method

    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }

return rev

   
}
console.log(reverse('madhu hai'))