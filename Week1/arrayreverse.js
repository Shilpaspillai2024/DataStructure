function reverse(arr){
    // return arr.reverse()

    for(let i=0,j=arr.length-1; i<j ; i++,j--){
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    return arr

}

//or

function rev(arr){
    let left =0;
    let right = arr.length -1

    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--
    }
    return arr
}


console.log(rev([2,4,5,7,9]))