// JavaScript code for Day 14: Operators, conditions
/* 1. Operations
        i) Arithmetic Operators
       ii) Assignment Operators
      iii) Comparison Operators
       iv) Logical Operators
        v) Bitwise Operators
        vi) Ternary Operators
   2. Conditions
        i) if statement
         ii) if...else statement
        iii) if...else if...else statement
        iv) switch statement
*/
// 1. Operations
// i) Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b));          // Addition
console.log("Subtraction: " + (a - b));       // Subtraction
console.log("Multiplication: " + (a * b));    // Multiplication
console.log("Division: " + (a / b));         // Division
console.log("Modulus: " + (a % b));          // Modulus     
console.log("Exponentiation: " + (a ** b)); // Exponentiation

// ii) Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log("c after += 5: " + c);
c -= 3; // c = c - 3
console.log("c after -= 3: " + c);
c *= 2; // c = c * 2
console.log("c after *= 2: " + c);
c /= 4;
console.log("c after /= 4: " + c); // c = c / 4

// iii) Comparison Operators
console.log("Is a equal to b? " + (a == b));
console.log("Is a not equal to b? " + (a != b));
console.log("Is a greater than b? " + (a > b));
console.log("Is a less than b? " + (a < b));
console.log("Is a greater than or equal to b? " + (a >= b));
console.log("Is a less than or equal to b? " + (a <= b));

// iv) Logical Operators
let x = true;
let y = false;
console.log("x AND y: " + (x && y));
console.log("x OR y: " + (x || y));
console.log("NOT x: " + (!x));

// v) Bitwise Operators
let p = 5;  // 0101 in binary
let q = 3;  // 0011 in binary
console.log("p AND q: " + (p & q)); // Bitwise AND
console.log("p OR q: " + (p | q));  // Bitwise OR
console.log("p XOR q: " + (p ^ q)); // Bitwise XOR
console.log("NOT p: " + (~p));       // Bitwise NOT
console.log("p left shift by 1: " + (p << 1)); // Left Shift
console.log("p right shift by 1: " + (p >> 1)); // Right Shift

// vi) Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can the person vote? " + canVote);

// 2. Conditions
// i) if statement
let num1 = 10;
if (num1 > 5) {
    console.log("num1 is greater than 5");
}

// ii) if...else statement
let num2 = 3;   
if (num2 % 2 === 0) {
    console.log("num2 is even");
} else {
    console.log("num2 is odd");
}

// iii) if...else if...else statement
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// iv) switch statement
let day = 3;
let dayName;    
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";       
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;  
    default:
        dayName = "Invalid day";
}
console.log("Day name: " + dayName);


