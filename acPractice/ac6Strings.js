console.log("----------------------------------------------- String Concatinations -----------------------------------------------")

let value="Hey Nikul How are you, I hope you doing well!"
let str=value.toUpperCase()
console.log(str);

 str=value.toLowerCase().trim()
 console.log(str);
 console.log(str.charAt(1));

 for (let index = 0; index < str.length; index++) {
    console.log(str.charAt(index));
 }

 let v1="hello"
 let v2="hy"
 let v3=v1.concat(v2)
 console.log(v3);


 let userName="nikul"
 console.log("@"+userName+userName.length);