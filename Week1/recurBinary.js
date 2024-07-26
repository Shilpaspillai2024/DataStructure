function recursiveBinary(nums,t){
  return binary(nums,t,0,nums.length-1)
}

function binary(nums,t,left,right){
  if(left>right){
    return -1
  }

  let mid=Math.floor((left+right)/2)

  if(nums[mid]===t){
    return mid
  }
  if(nums[mid]<t){
    return binary(nums,t,mid+1,right)
  }else{
    return binary(nums,t,left,mid-1)
  }

}

console.log(recursiveBinary([2,4,6,9,10,12],3))