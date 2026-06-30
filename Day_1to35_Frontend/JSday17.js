// Day 17: Arrays & objects
console.log("Day 17: Arrays & objects");

// Creating an array
let fruits=["Apple","Banana","Mango","Orange"];
console.log("Fruits array:", fruits);

// Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Modifying array elements
fruits[2]="Grapes";
console.log("Modified fruits array:", fruits);

// push() method to add an element
fruits.push("Pineapple");
console.log("After push:", fruits);

// pop() method to remove the last element
let removedFruit=fruits.pop();
console.log("After pop:", fruits);
console.log("Removed fruit:", removedFruit);

// shift() method to remove the first element
let firstFruit=fruits.shift();
console.log("After shift:", fruits);
console.log("Removed first fruit:", firstFruit);

// unshift() method to add an element at the beginning
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// Creating an object
let person={
    name:"John",
    age:30,
    city:"New York"
};
console.log("Person object:", person);

// Accessing object properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Modifying object properties
person.age=31;
console.log("Modified person object:", person);

// Adding new property
person.country="USA";
console.log("After adding country:", person);

// Deleting a property
delete person.city;
console.log("After deleting city:", person);

// Looping through array
console.log("Looping through fruits array:");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// Looping through object properties
console.log("Looping through person object:");
for(let key in person){
    console.log(key + ": " + person[key]);
}

// multiple object data
let students=[
    {name:"Alice",age:20},
    {name:"Bob",age:22},
    {name:"Charlie",age:23}
];

for(let stud of students){
    console.log("Student:", stud.name, "Age:", stud.age);
}

