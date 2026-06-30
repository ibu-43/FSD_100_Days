// Day 26: ES6 Features

// 1. let and const
let name = "Alice";
const PI = 3.14;

// 2. Arrow Functions
const add = (a, b) => a + b;

// 3. Template Literals
const greeting = `Hello, ${name}!`;

// 4. Destructuring
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

// 5. Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 6. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 7. Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.greet());

// 8. Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}
fetchData().then(data => console.log(data)).catch(error => console.error(error));

// 9. Modules (Note: This requires a module system like Node.js or a bundler)
// export const myFunction = () => {
//     console.log("This is a module function.");
// }    

// Advanced ES6 Features (map, filter, reduce, generators, async/await)

// 10. Generators
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// 11. Async/Await  
const asyncFunction = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}       
asyncFunction();

// 12. Map, Filter, Reduce
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
const even = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(squared);
console.log(even);
console.log(sum);

// 13. Set and Map
const mySet = new Set([1, 2, 3, 4, 5]);
mySet.add(6);
console.log(mySet.has(3));
mySet.delete(2);
console.log(mySet); 
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 30);
console.log(myMap.get("name"));
myMap.delete("age");
console.log(myMap);

// end of code