// 1---factorial of a number using recursion

function factorial(n){

    if(n==0){

        return 1
    }

    return n*factorial(n-1)
}

console.log(factorial(5))


                        //  2---factorial of number normal loop

function factorial(n){

    let fact=1;

    for(let i=1;i<=n;i++){

        fact*=i;
    }

    return fact;
}

console.log(factorial(5))




                //  -03-----fibonacci using normal loop

    
                 function fib(n){

                    let fibinoci=[0,1]

                    for(let i=2;i<n;i++){

                        fibinoci[i]=fibinoci[i-1]+fibinoci[i-2];

                    }

                    return fibinoci;
                 }

                 console.log(fib(10))
                 

                // 04---fibinoci using recursion

       
                function fibinoci(n){

                    if(n<=1){
                        return n;
                    }

                    return fibinoci(n-1)+fibinoci(n-2)
                }

                console.log(fibinoci(6))



                // --05----- Sum of Array Elements

         function sumOf(arr){
             
        let sum=0;
     for(let i=0;i<arr.length;i++){

        sum+=arr[i]
     }

     return sum;


         }       

         console.log(sumOf([1,2,3,4,5]))


    function sum(arr){

        if(arr.length===0){
            return 0;
        }

        return arr[0]+sum(arr.slice(1))
    }

    console.log(sum([1,2,3,4,5]))
  



            //  /06-----4. Reverse a String


   function reverse(str){

    return str.split('').reverse().join('')
   }      
   
   console.log(reverse('hello'))



function reverse(str){

    let rev=[]

    for(let i=str.length-1;i>=0;i--){

       

            rev+=str[i]
            
            
            if( i !==0){
                rev+=''
            }
    }
    return rev;
}


console.log(reverse('hello world'))


// using recusrsion

function reverse(str){


    if(str===''){
        return ''
    }

    return reverse(str.substr(1))+str.charAt(0)
}

console.log(reverse('hello world'))

// /--\palendrome


function palendrome(str){

    if(str.length<=1){
        return true
    }

    if(str[0]!==str[str.length-1]){
        return false
    }

    return palendrome(str.slice(1,-1))
}


console.log(palendrome('racecar'))


// reecursion using bineary search



function bineary(arr,target,start=0,end=arr.length-1)
{

    if(start>end){
        return -1
    }

    let mid=Math.floor((start+end)/2);

    if(arr[mid]===target){
        return mid;
    }

    else if(arr[mid]>target){
        return bineary(arr,target,start,mid-1)
    }

    else{
             return bineary(arr,target,mid+1,end)
    }
}


console.log(bineary([1,2,3,4,5,6,7],4))

// Remove vowels from a string: Write a function that iterates through a string and removes vowels (a, e, i, o, u).

function remove(str){

    let res='';
    let vowels="aeiou"
    let lowerStr=str.toLowerCase()

    for(let char of lowerStr){

        if(!vowels.includes(char)){

            res+=char;
        }


    }

return res;
}

console.log(remove('hello'))


// Convert the last letter to uppercase: Write a function that changes the last character of a string to uppercase.

function upper(str){
 let lastChar= str.charAt(str.length-1).toUpperCase()
    let restOfString = str.slice(0, str.length - 1);
return restOfString+lastChar
}


console.log(upper('hello'))

// Find the longest word in a string: Write a function to find the longest word in a given string, considering spaces as word separators.

function longest(Str){

let word=Str.split(' ')
    let longest='';

    for(let char of word){

        if(char.length>longest.length){

            longest=char;
            console.log(longest)
        }
    }
    return longest
}

console.log(longest('hello akshayjyothi iam from '))


// Write a program to reverse a string using recursion: Implement a function that reverses a string by recursively swapping characters.


function reverse(str){


    if(str===''){
        return ''
    }

    return reverse(str.substr(1))+str.charAt(0)


}

console.log(reverse('hello world'))


//using recusrsion

function reverse(str){


    if(str===''){
        return ''
    }

    return reverse(str.substr(1))+str.charAt(0)
}

console.log(reverse('hello world'))


// Remove duplicates from an array: Write a function that removes duplicate elements from an array and returns the array with unique elements.




function removes(arrr){

    let res=[]

    for(let i=0;i<arrr.length;i++){

        if(res.indexOf(arrr[i])===-1){
            res+=arrr[i]
        }
    }
    return res
}

console.log(removes([1,2,3,4,2,4,6,3,6]))



//Reverse the array: Write a function to reverse the order of elements in an array.

function reverse(arr){

    let rev=[]

    for(let i=arr.length-1;i>=0;i--){

        rev+=arr[i]
    }
    
return rev;
}

console.log(reverse([1,2,3,4,5]))


//Sum of all the elements of an array using recursion: Write a recursive function to calculate the sum of all elements in an array.

function sumOf(arr){

    if(arr.length===0){
        return 0
    }

return arr[0]+sumOf(arr.slice(1))


    

 
}

console.log(sumOf([1,2,3,4,5]))


//Flatten a nested array: Write a function that converts a nested array into a flat array (e.g., [8, 8, [0, [5]]] -> [8, 8, 0, 5]).

function flater(arr){

    return arr.flat(Infinity)
}

console.log(flater([8, 8, [0, [5]]] ))


function flater(arr){

    if(Array.isArray(arr)){
}
}

//Remove duplicates from an array [9,8,6,5,5,4,4,4,4,0,-1]: Implement a function to remove duplicates from the given array and return the unique elements.

function remove(arr){


    let res=[];

    for(let i=0;i<arr.length;i++){

       if( res.indexOf(arr[i])===-1){

        res+=arr[i]
       }
       
    }
    return res;
}


console.log(remove([ 3 , 5, 2, 3,6,7,4,5,6,54,54,6,3,2,1,8] ))


//Factorial: Write a recursive function to calculate the factorial of a number.


function factorial(num){

    if(num<=1){
        return 1
    }

    return num*factorial(num-1)
}

console.log(factorial(5))


//Fibonacci: Implement a recursive function to generate the nth Fibonacci number.


function fib(num){

    if(num<=1){
        return 1
    }

    return fib(num-1)+fib(num-2)
}


console.log(fib(5))


//Reverse (string, array): Write recursive functions to reverse a string and an array.


function reverse(str){


    if(str===''){
return ''
    }

    return reverse(str.substr(1))+str.charAt(0)
}


console.log(reverse('hello'))



//array reverse recursion


function reverse(arr){

    if(arr.length===0){
        return []
    }

    return reverse(arr.slice(1)).concat(arr[0])
} 

console.log(reverse([1,2,3,4,5]))



//Sum of array: Implement a recursive function to calculate the sum of elements in an array.


function sumOf(arr){

    if(arr.length===0){
        return 0
    }

    return arr[0]+sumOf(arr.slice(1))

}


console.log(sumOf([1,2,3,4,5]))


//Palindrome check: Write a recursive function to check if a string is a palindrome.

function palendrome(str){

    if(str.length<=1){
        return true;
    }

    if(str[0]!==str[str.length-1]){
        return false
    }

    return palendrome(str.slice(1,str.length-1))
}


console.log(palendrome('racecar'))

//Binary search: Write a recursive function to perform binary search on a sorted array.

function binary(arr,target, start=arr[0],end=arr.length-1){



    if(start>end){
        return -1
    }

    let mid=Math.floor((start+end)/2)

    if(arr[mid]===target){
        return mid;
    }

    else if(arr[mid]>target){

        return binary(arr,target,start,mid-1)
    }

    else{

        return binary(arr,target,mid+1,end)
    }



}


console.log(binary([1,2,3,4,5,6,7],3))