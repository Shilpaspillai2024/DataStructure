// function arraySum(nums){
//     let sum=0
//     for(i of nums){
//         sum+=i
//     }
//     return sum
// }

// console.log(arraySum([2,3,4]))



function sumArray(nums){
   if(nums.length===0){
      return 0
   }

   return nums[0]+sumArray(nums.slice(1))
}
console.log(sumArray([2,3,4,4]))