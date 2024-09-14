// undefined 
// null

// let firstName;
// console.log(firstName) // undefined
// console.log(typeof firstName); // undefined
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable); 
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null); // object bug/error in js. It should be null. 

// BigInt
let myNumber = BigInt(12); 
let sameMyNumber = 123n;
// console.log(myNumber); // 12n
// console.log(sameMyNumber) // 123n
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(myNumber+ sameMyNumber); // 135n
