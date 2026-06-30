// Day 28: JS practice tasks

// Task 1: Even or Odd
function evenOrOdd(num){
    if(num%2==0) return "Even";
    else return "Odd";
}
console.log(evenOrOdd(10)); // Output: Even
console.log(evenOrOdd(7));  // Output: Odd

// Task 2: Find Largest Number in the array
function largestNumber(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) max=arr[i];
    }
    return max;
}
console.log(largestNumber([3, 5, 7, 2, 8])); // Output: 8

// Task 3: Reverse a String
function reverseString(str){
    let rev="";
    let left=0, right=str.length-1;
    while(left<right){
        let temp=str[left];
        rev+=str[right];
        rev+=temp;
        left++;
        right--;
    }
    return rev;
}
console.log(reverseString("Hello")); // Output: "olleH"

// Task 4: Count Vowels
function countVowels(str){
    let c=0;
    for(let i=0;i<str.length;i++){
        if("aeiouAEIOU".includes(str[i])) c++;
    }
    return c;
}
console.log(countVowels("Hello World")); // Output: 3

// Task 5: Remove duplicate values from an array.
function removeDuplicates(arr){
    let unique=[];
    for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])) unique.push(arr[i]);
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]

// Task 6: FizzBuzz
function fizzBuzz(num){
    if(num%3==0 && num%5==0) return "FizzBuzz";
    else if(num%3==0) return "Fizz";
    else if(num%5==0) return "Buzz";
    else return num;
}
console.log(fizzBuzz(15)); // Output: "FizzBuzz"
console.log(fizzBuzz(9));  // Output: "Fizz"
console.log(fizzBuzz(10)); // Output: "Buzz"
console.log(fizzBuzz(7));  // Output: 7

// End of Level 1 tasks. More tasks can be added for Level 2 and Level 3 as needed.