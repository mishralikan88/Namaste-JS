// primitve vs reference data types

// primitve types - number , string , boolean , null ,undefined
// primitve types are stored in stack memory.
// 1 === 1 => true

// let num1 = 6;
// let num2 = num1; // num1 value is stored inside num2 variable / memory space
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1); // 7 - value inside  num 1 is updated 
// console.log("value is num2 is", num2); // 6 - value inside num 2 is not impacted because num1 and num2 are separate memory spaces and we are doing operation inside num1.


// reference types - arrays , objects , ...
// reference types are stored in heap 
// [] === [] => false because both arrays have different references which are not equal to each other. Reference check is happening here.
// When an array or object is initialised the initialsed value will be stored in a separate memory space inside heap to which a reference variable points to.


let array1 = ["item1", "item2"];
let array2 = array1; // array2 and  array1 pointys to the same memory inside heap.
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1); // array 1 is updated 
console.log("array2", array2); // array 2 is also updated.