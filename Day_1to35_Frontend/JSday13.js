//variables
let name="Mohammed Ibrahim J";     //Modern variable
var age=20;                       //Old variable
const clg="SJIT";   //Constant variable ( doesn't change )

//printing variables
console.log("This is "+name)

//variable declaration without initialization
let city;

//variable initialization
city="Chennai";

//data types
let str="Hello World";    //String
let num=100;              //Number
let isTrue=true;         //Boolean
let undef;               //Undefined
let nul=null;            //Null
let students={
    name:"Ibu",
    age:20,
    clg:"SJIT"
}                  //Object
let arr=[1,2,3,4,5];     //Array


//printing data types
console.log("String: "+str);
console.log("Number: "+num);
console.log("Boolean: "+isTrue);
console.log("Undefined: "+undef);
console.log("Null: "+nul);
console.log("Object: "+JSON.stringify(students));
console.log("Array: "+arr);