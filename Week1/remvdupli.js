// function removeDupli(nums){
//    let arr=[...new Set(nums)]
//    return arr


// }

// console.log(removeDupli([3,2,5,3,7,5]))



// function removeDupli(nums){
    
//  return nums.filter((item,index)=>nums.indexOf(item)===index)
//  }
 
//  console.log(removeDupli([3,2,5,3,7,5]))
 
 
//  function removeDupli(nums){
//     let arr=[]
//     for(let i=0;i<nums.length;i++){
//         if(!arr.includes(nums[i])){
//             arr.push(nums[i])
//         }
//     }
//     return arr
//  }

//  console.log(removeDupli([3,2,5,3,7,5]))

// function removeDupli(nums){
//     let arr=new Set()
//     for(let i=0;i<nums.length;i++){
//         arr.add(nums[i])
//     }
    
//     return [...arr]
//  }

//  console.log(removeDupli([3,2,5,3,7,5]))



function removeDupli(nums){
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(arr.indexOf(nums[i])===-1){
            arr.push(nums[i])
        }
    }
    return arr
}

console.log(removeDupli([3,2,5,3,7,5]))