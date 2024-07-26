// function binaryRe(nums,t){
//     return binary(nums,t,0,nums.length-1)
// }

// function binary(nums,t,left,right){
//     if(left>right){
//         return -1
//     }

//     let mid=Math.floor((left+right)/2)
//     if(nums[mid]===t){
//         return mid
//     }

//     if(nums[mid]<t){
//         return binary(nums,t,mid+1,right)
//     }else{
//         return binary(nums,t,left,mid-1)
//     }
 
// }

console.log(binaryRe([2,3,4,5,6],5))


// binary without Recursion


function binaryRe(nums,t){

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
    return -1
}