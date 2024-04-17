// Loops

let n=15
console.log("---------------------------------------------------- For Loop ----------------------------------------------------");
let sum=0
for(let i=0;i<=n;i++){
    sum=sum+i
}
console.log(sum);

console.log("---------------------------------------------------- While Loop ----------------------------------------------------");

let wh=0
let sm=0
while (wh<=n) {
    sm=sm+wh
    wh++
}
console.log(sm);

console.log("---------------------------------------------------- Do Loop ----------------------------------------------------");

let wh1=0
let sm1=0
do {
    sm1=sm1+wh1
    wh1++
} while (wh1<=n);
console.log(sm1);

console.log("---------------------------------------------------- For of Loop ----------------------------------------------------");
// this for of is used only for the Strings and array to count the value size and loopd
let value="nick boharwal"
let count=0
for (let ind of value) {
    console.log(ind);
    console.log(count);

    count++
    // console.log(count);
}


console.log("---------------------------------------------------- For in Loop ----------------------------------------------------");

let student={name:"nick",email:"password@gmail.com",password:"pass"}
let studentList=[];
for(let i=0;i<500;i++){
    studentList.push({name:"nick"+i,email:"password@gmail.com",password:"pass"})
}

for (let i in studentList) {
console.log(i," = ",studentList[i])
}
