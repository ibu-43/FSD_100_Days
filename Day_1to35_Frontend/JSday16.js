// Day 16: Functions, scope
/* JavaScript Functions are blocks of code designed to perform a particular task.
They are executed when "called" or "invoked".   
*/

// Function Declaration
function greet(name){
    console.log(name);
}
greet("Hello, World!"); // Output: Hello, World!

// Fuction with Return Value
function add(a,b){
    return a+b;
}
console.log(add(3,5)); // Output: 8

// Function with Default Parameters
function multiply(a,b=2){
    return a*b;
}
console.log(multiply(4)); // Output: 8

// Function Expression 
const square=function(x){
    return x*x;
}
console.log(square(6)); // Output: 36

// Arrow Function
const divide=(a,b)=>a/b;
console.log(divide(10,2)); // Output: 5

// Function Scope
function testScope(){
    let localVar="I am local";
    console.log(localVar); // Output: I am local
}   
testScope();
// console.log(localVar); // Error: localVar is not defined

// Global Scope
let globalVar="I am global";    
function showGlobal(){
    console.log(globalVar); // Output: I am global
}
showGlobal();
console.log(globalVar); // Output: I am global

// Nested Functions
function outerFunction(){
    function innerFunction(){
        return "Hello from Inner Function";
    }
    return innerFunction();
}
console.log(outerFunction()); // Output: Hello from Inner Function
// Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("IIFE executed!"); // Output: IIFE executed!
})();

// Recursion
function factorial(n){
    if(n<=1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5)); // Output: 120

// Callback Function
function processUserInput(callback){
    let name="Alice";
    callback(name);
}
processUserInput(function(name){
    console.log("Hello "+name); // Output: Hello Alice
});

// Arrow Function as Callback
processUserInput(name=>{
    console.log("Welcome "+name); // Output: Welcome Alice
});