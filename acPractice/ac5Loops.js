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
