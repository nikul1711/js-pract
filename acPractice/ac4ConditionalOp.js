console.log("-----------------------------Conditional Operators -----------------------------")
let a =10
let b=50

if (a<b) {
    console.log("B is bigger than A");
} else {
    console.log("A is bigger than B");
}
console.log("-----------------------------Nested Conditional Operators -----------------------------")
// 
let age=189

if (age<1 || age<10) {
    console.log("Your children")
} else if (age<11 || age<18) {
    console.log("Under age")
} else{
    console.log("You can vote");
}

let mode="pink"
let color;
if (mode=="dark") {
    color="black"
} else if (mode=="blue") {
    color="blue"
}else if (mode=="pink") {
    color="pink"
}else {
    color ="white"
}

console.log(color);

console.log("-----------------------------Ternary Operators -----------------------------")
let ages=16

age>=18?console.log("adult"):console.log("not adult");
