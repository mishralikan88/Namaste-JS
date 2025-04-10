// Array destructuring 

// syntax - const [variable1, variable2, ..., variableN] = array;

const myArray = ["value1", "value2", "value3", "value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

let [myvar1, myvar2, ...myNewArray] = myArray; // Here '...' acts as a rest operator here because ...myNewArray takes elements and forms an array. packing.
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);