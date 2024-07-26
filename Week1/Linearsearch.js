function linearSearch(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t){
            return i
        }
       
    }
    return -1
}

// let arr=[-5,2,10,4,6]
// let t=6

// console.log(linearSearch(arr,t))
console.log(linearSearch([4,-5,6,7,8],-5))