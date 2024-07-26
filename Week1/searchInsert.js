function search(nums,t){
    let left=0;
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(t===nums[mid]){
            return mid
        }
        if(t<nums[mid]){
            right=mid-1
        }else{
            left=mid+1
        }

    }
    return left  // for giving insert posion if no target found ,
}

console.log(search([5,6,7,8,9],9))
console.log(search([5,6,7,8,9],1))
console.log(search([5,6,7,8,9],11))
