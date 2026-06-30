// Day 25: Async / Await

/* 👉 async / await is syntactic sugar over Promises.
It makes async code look synchronous.

📌 In simple words:

“Wait here until the promise finishes.”

*/

// Async / Await is a way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.

// The async keyword is used to declare a function as asynchronous. This means that the function will return a promise, and you can use the await keyword inside the function to wait for the promise to resolve before continuing with the rest of the code.

// Async Keyword:
async function greet() {
  return "Hello";
}

greet().then(console.log); // Hello

// Await Keyword:
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData(); // After 2 seconds, logs: Data received


// Error Handling try and catch:
async function loginUser(success) {
  try {
    const result = await login(success);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// In this example, the fetchData function is declared as async. Inside the function, we use await to wait for the fetch operation to complete and return a response. Then we use await again to parse the response as JSON. If any errors occur during the fetch or parsing process, they will be caught in the catch block.
// Async / Await is a powerful tool for handling asynchronous operations in JavaScript, and it can help you write cleaner and more maintainable code.

// /* 5️⃣ Sequential vs Parallel Execution (Interview 🔥)
// ❌ Slow (Sequential) */
// const a = await task1();
// const b = await task2();

// // ✅ Fast (Parallel)
// const [a, b] = await Promise.all([task1(), task2()]);

// // 6️⃣ async/await with Fetch API (REAL WORLD)
// async function getUsers() {
//   try {
//     const response = await fetch("https://api.example.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error fetching data");
//   }
// }