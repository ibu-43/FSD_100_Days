// Day 21: Execution context, hoisting
console.log("Welcome to Day 21 of JavaScript learning!");

// Example of hoisting
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted!";

function hoistingExample() {
    console.log(hoistedFunc()); // Works due to hoisting   
    function hoistedFunc() {
        return "I am a hoisted function!";
    }
}
hoistingExample();

// Example of execution context
function executionContextExample() {
    var localVar = "I am local to this function";
    console.log(localVar);
}
executionContextExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// Day 22: Closures
console.log("Welcome to Day 22 of JavaScript learning!");

// Closure = inner function + lexical environment ( outer function's variables )
function outerFunction() {
    var outerVar = "I am from the outer function";
    function innerFunction() {
        console.log(outerVar); // Accessing outer function's variable
    }   
    return innerFunction;
}
var closureExample = outerFunction();
closureExample(); // Logs: I am from the outer function

// Another closure example
function makeCounter() {
    var count = 0;  
    return function() {
        count++;
        return count;
    }
}
var counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Day 23: Callbacks
console.log("Welcome to Day 23 of JavaScript learning!");

// Example of a callback function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Ibrahim", sayBye);

// Another callback example with asynchronous behavior
function fetchData(callback) {
    setTimeout(function() {
        const data = "Sample Data";
        callback(data);
    }, 2000);
}

fetchData(function(data) {
    console.log("Fetched Data: " + data);
});
// End of Day 23

// Day 24: Promises
console.log("Welcome to Day 24 of JavaScript learning!");

// create the promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

// consume the promise
myPromise
  .then((message) => {
    console.log("Success: " + message);
    })
    .catch((error) => {
    console.error("Error: " + error);
    });

// Example of a Promise
function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = "Sample Data";
            resolve(data); // Resolve the promise with data
        }, 2000);
    });
}
fetchData()
    .then(function(data) {
        console.log("Fetched Data: " + data);
    })
    .catch(function(error) {
        console.error("Error fetching data: " + error);
    });
