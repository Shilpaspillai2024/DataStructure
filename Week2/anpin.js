
// sorting mergesort...
//let arr =[1,0,3,5,8,9,10,12]  // in this only 1 element need to change so bubblesort is effecient

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sort = [];
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sort.push(left.shift())
//         }else{
//             sort.push(right.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }

// console.log(mergeSort(arr))



// 2.. even stack from the stack
//let stack = [10,3,4,2,5,12,6,1]

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(ele){
//         this.items.push(ele)
//     }

//     pop(){
//         return this.items.pop()
        
//     }

//     sort(){
//         this.items.sort((a,b)=>a-b)
//     }

//     evenStack(){
//         const tempStack = new Stack();
//         while(this.items.length !== 0){
//             const ele = this.items.pop()
//             if(ele % 2 === 0){
//                 tempStack.push(ele)
//             }
//         }
//         return tempStack
//     }

// }

// const stack = new Stack()
// stack.push(10)
// stack.push(3)
// stack.push(4)
// stack.push(2)
// stack.push(5)
// stack.push(12)
// stack.push(6)
// stack.push(1)

// stack.sort()

// console.log(stack.evenStack())



