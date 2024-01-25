//Write a JavaScript function to calculate the sum of two numbers
function sum(a,b){
    return a+b
}
console.log(sum(1.0987,1.0013))

// Write a JavaScript program to find the maximum number in an array.
function maximum(array){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return  max
}
const arr = [1,2,3,4,5]
console.log(maximum(arr))

// Write a JavaScript function to check if a given string is a palindrome.

let str ="aba"
let result = str.split("").reverse("").join("");
if (str==result){
  console.log("it is  a palindrome")  
}
else{
    console.log("it is not a palindrome")
}

//write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenfilter(arr){
    let result= arr.filter(ele=>ele%2==0);
    return[...result]
}
const array=[1,2,3,4,5,6]
console.log(evenfilter(array))

//Write a JavaScript program to calculate the factorial of a given number.
const n = 5
let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`Factorial of ${n} = ${fact}`);







































