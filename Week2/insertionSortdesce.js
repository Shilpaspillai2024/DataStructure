function insertionSortdesce(arr){

    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]<numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }

}

const arr=[10,20,-4,0,8,-5,2,6]
insertionSortdesce(arr)
console.log(arr)