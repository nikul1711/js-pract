// Arrays in JS (Collection of items)
let heroes=["Ironman","Captain America","Thor","Loki","Spiderman"]
let marks=[11,15,12,14,13]
let info=["rahul",89,"Delhi"]


 for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
 }

//  Find the average of the array
 let studentMarks=[85,97,44,37,76,60]
//  find a average marks of student
let totalMarks=0

for (let val  of studentMarks) {
   totalMarks+=val
}
console.log(totalMarks/studentMarks.length);

// For a given array with prices of 5 -> Items [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items=[250,645,300,900,50]
for(let i=0;i<items.length;i++){
   // console.log(`value at index ${i} = ${items[i]}`);
   let offer=items[i]/10
   items[i]=items[i]-offer
   // console.log(`value after offer = ${items[i]}`);
}

//  Push, Pop, 

/*
Push = add to end in arrayList
Pop = delete from end & return
toString = converts array to string
Concat = join multiple arrays & returns edit
unshift = add to start (it works like push)
shift = delete from start & return (it works like pop)
*/


let let_heroes=["Ironman","Captain America","Thor","Loki","Spiderman"]
let let_dc_heroes = ["Superman","Batman","Flash","Joker"]
let indian_heroes =["Shaktiman","Krish"]

let_heroes.pop()
// console.log(let_heroes);
let_heroes.push("SpriderMan")
// console.log(let_heroes.concat(let_dc_heroes));


let componies=["Bloomberg","Microsoft","Uber","Google","IBM","Netfli"]
// Create an array
/*
Create an array to store componies
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add amazon at the end
*/ 

console.log(componies.shift());
console.log(componies);
componies.splice(1,1,"Ola")
console.log(componies);
componies.push("Amazon")
console.log(componies);


