// Day 18: Array methods (map, filter, reduce)
// Example array
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const double=numbers.map(num=>num*2);
console.log(`doubled numbers: ${double}`); // Output: [2, 4, 6, 8, 10]

// Using filter to get even numbers
const evens=numbers.filter(num=>num%2===0);
console.log(`even numbers: ${evens}`); // Output: [2, 4]

// Using reduce to sum all numbers
const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(`sum of numbers: ${sum}`); // Output: 15

// Combining map, filter, and reduce
const combinedResult=numbers
    .map(num=>num*3) // Triple each number
    .filter(num=>num>10) // Keep numbers greater than 10
    .reduce((acc,num)=>acc+num,0); // Sum the remaining numbers
console.log(`combined result: ${combinedResult}`); // Output: 27 (i.e., 12 + 15)

