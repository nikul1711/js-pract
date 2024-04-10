
// all DataTypes

/* 
int= use for the number
string = store for the text
boolean = store value true or false
null= stand alone variable (knew about the datatype but doesn't store anything ,just like empty )
undefined => where data doesn't know what is inside to store the value
symbol => unique
*/


/*----------------------------------------------------------- let, const & var ----------------------------------------------------------------------
var = Variable can be redeclared & updated. A global scope variable
let = Variable can't be redeclared but can be updated. A block scope variable
constant = Variable can't be redeclared and update. A block scope variable
*/

let name = "Nikul"
let age = 13
let isLoggedIn=false

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};
// there is two types to access object key value
console.log(person.firstName);
console.log(person["lastName"]);

// method to change the value of object key
person.firstName="Johns"
console.log("after change "+person.firstName);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
console.log(product)

console.log(cars);

console.log(typeof undefined); // undefined is a type
console.log(typeof null); // object
