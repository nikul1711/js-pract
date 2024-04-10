const accountID=145623
let accountEmail="nikul@gmail.com"
var acountPassword="132456"
acountCity="London"
let accountState;
// accountID=2  not allowed
accountEmail="ee@gmail.com"
acountPassword="456465"
/*
Prefer not to use var
because of issue in block scope anf functional scope
*/
console.table([accountID,accountEmail,acountPassword,acountCity,accountState]);