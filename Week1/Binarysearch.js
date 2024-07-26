function binarySearch(nums,t){
    let left=0
    let right=nums.length-1

    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(nums[mid]===t){
            return mid
        }
        if(nums[mid]<t){
           left=mid+1

        }else{
            right=mid-1
        }
    }
    return-1
}

console.log(binarySearch([2,4,5,7,9],0))


//using recursion

// function binarySearch(arr,t){
//     return search(arr,t,0,arr.length-1)
// }

// function search(arr,t,left,right){
//     if(left>right){
//         return -1

//     }
//     let middle=Math.floor((left+right)/2)

//     if(t===arr[middle]){
//        return middle
//     }
//     if(t<arr[middle]){

//         return search(arr,t,left,middle-1)

//     }else{
//         return search(arr,t,middle+1,right)
//     }
// }

// console.log(binarySearch([2,4,5,7,9],7))
