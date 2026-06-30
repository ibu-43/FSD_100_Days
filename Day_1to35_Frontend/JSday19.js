// Day 19: DOM manipulation

// DOM is the Document Object Model, which represents the structure of a web page.

// Accessing and modifying DOM elements using JavaScript
console.log(document);

// Selecting an element by its ID
const elementById = document.getElementById("myElement");
console.log(elementById);

// Selecting elements by their class name
const elementsByClassName = document.getElementsByClassName("myClass");
console.log(elementsByClassName);

// Selecting elements by their tag name
const elementsByTagName = document.getElementsByTagName("a");
console.log(elementsByTagName);

// selecting elements using querySelector
const firstElement = document.querySelector(".myClass");
console.log(firstElement);

// Modify the content and style of DOM elements
const myElement = document.getElementById("myElement");
myElement.innerHTML = "Updated Content for Day 19";
myElement.style.color = "blue";
myElement.style.fontSize = "24px";

// Creating and appending new elements to the DOM
const newElement = document.createElement("p");
newElement.innerHTML = "This is a new paragraph added to the DOM.";
document.body.appendChild(newElement);

// Removing an element from the DOM
const elementToRemove = document.querySelector(".myClass");
elementToRemove.remove();
console.log("Element removed from the DOM.");