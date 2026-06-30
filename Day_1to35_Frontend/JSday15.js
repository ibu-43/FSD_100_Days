// Day 15: JavaScript Loops

/* JavaScript Loops are three types:
1. For Loop
2. While Loop
3. Do While Loop
*/

// 1. For Loop
console.log("For Loop:");
for(let i=1;i<=5;i++){
    console.log(i);
}
// Output: 1 2 3 4 5

// 2. While Loop
console.log("While Loop:");
let a=1;
while(a<=5){
    console.log(a);
    a++;
}
// Output: 1 2 3 4 5

//3. Do While Loop
console.log("Do While Loop:");
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);

// Output: 1 2 3 4 5

// Loops in Array
console.log("Loops in Array:");
let arr=["apple","banana","cherry"];
for(let i of arr){
    console.log(i);
}
// Output: apple banana cherry

// Break Statement
console.log("Break Statement:");
for(let i=1;i<=10;i++){
    if(i==6) break;
    console.log(i);
}
// Output: 1 2 3 4 5

// continue statement
console.log("Continue Statement:");
for(let i=1;i<=10;i++){
    if(i==6) continue;
    console.log(i);
}
// output: 1 2 3 4 5 7 8 9 10