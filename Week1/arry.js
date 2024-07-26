// const arr=[2,3,4,'shilpa','suma']

// arr.push(6)
// arr.unshift(0)
// arr.pop()
// arr.shift()
// for(let i of arr){
//     console.log (i)
// }


//Flatten a nested array: Write a function that converts a nested array into a flat array (e.g., [8, 8, [0, [5]]] -> [8, 8, 0, 5]).



function flatten(arr){
    // return arr.flat(Infinity)
  let res=[]
    for(let item of arr){
        if(Array.isArray(item)){
             res.push(...item)
        }
        else{
            res.push(item)
        }
    }
    return res

}

console.log(flatten([2,[5,7],[6],8]))