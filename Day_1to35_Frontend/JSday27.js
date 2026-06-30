// Day 27: Error handling in JavaScript

// 1. try...catch block
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

// 2. Throwing custom errors
function validateAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return age;
}

try {
    validateAge(-5);
} catch (error) {
    console.error(error.message);
}

// 3. finally block
try {
    let data = "Some data";
    console.log(data);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleanup operations performed.");
}
