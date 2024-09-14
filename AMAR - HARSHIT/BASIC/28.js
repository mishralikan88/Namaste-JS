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
// console.log("value is num2 is", num2); // 6 - The value inside num2 is not impacted because num1 and num2 are stored in separate memory spaces, and we are performing operations inside num1


// reference types - arrays , objects , ...
// reference types are stored in heap 
// [] === [] => false .why ? explained in the end of this file. 


let array1 = ["item1", "item2"];
let array2 = array1; // array2 and  array1 points to the same memory inside heap.
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1); // array 1 is updated 
console.log("array2", array2); // array 2 is also updated.


// In JavaScript, arrays are considered reference types because they are objects, and objects in JavaScript are 
// reference types by nature. Here’s how this works:

// Understanding Value Types vs. Reference Types

// Value Types (Primitive Types):

// These include number, string, boolean, null, undefined, symbol, and bigint.
// When you assign a primitive value to a variable, the actual value is stored directly in the variable.
// If you copy a primitive value from one variable to another, a copy of the value is made, and the two variables 
// operate independently.

// let a = 10;
// let b = a; // b is a copy of a
// b = 20;   // Changing b does not affect a
// console.log(a); // 10
// console.log(b); // 20


// Reference Types:


// These include objects, arrays, functions & other non-primitive types.
// When you assign a reference type to a variable, the variable doesn’t hold the actual value but rather a reference (or pointer) to the location in memory where the
// object is stored.If you copy a reference from one variable to another, both variables refer to the same object in memory. Changing the object through one variable
//  will reflect in the other variable.

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // arr2 holds a reference to the same array as arr1
// arr2.push(4);    // Modifying the array through arr2
// console.log(arr1); // [1, 2, 3, 4] - arr1 is also affected
// console.log(arr2); // [1, 2, 3, 4] - arr2 reflects the same array

// Why Arrays Are Reference Types
// Memory Management:

// In JavaScript, when you create an array, the array's elements are stored in memory, and a reference to that memory location is stored in the variable.
// This reference is what gets passed around when you assign the array to another variable or pass it to a function.

// Mutability:

// Since arrays (and objects) are mutable, meaning their contents can change, having them as reference types allows for efficient memory use.
// If arrays were value types, each change to the array would require copying the entire array, which would be inefficient, especially for large arrays.

// Example of Reference Behavior
// Here’s an example demonstrating how arrays as reference types behave:


// let arr1 = [1, 2, 3];
// let arr2 = arr1; // arr2 now references the same array as arr1

// arr2[0] = 100; // Modify the array through arr2
// console.log(arr1); // [100, 2, 3] - arr1 reflects the change

// arr1.push(4); // Modify the array through arr1
// console.log(arr2); // [100, 2, 3, 4] - arr2 reflects the change
// In the above example, both arr1 and arr2 point to the same array in memory. Modifying the array through either variable affects the same underlying data.



// In JavaScript, [] == [] returns false because each array literal creates a new object in memory, and object comparisons are based on reference equality rather than
// value equality.


// [] creates a new empty array.
// When you use == (or === for strict equality) to compare two arrays, JavaScript checks if both arrays reference the exact same object in memory.
// Since [] and [] create two separate array objects, they have different references, even though they are both empty. Therefore, [] == [] evaluates to false.
// If you want to compare the contents of two arrays, you would need to check their individual elements. For example, you could write a function to compare arrays by iterating through their elements and checking for equality.

// Here's a simple function to compare two arrays for equality - 

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // f the sizes of the arrays are different

    for (let i = 0; i < arr1.length; i++) {  // If the sizes of the arrays are the same, the items in each array are compared.
        if (arr1[i] !== arr2[i]) return false;  // Mismatching case
    }

    return true;
}

console.log(arraysEqual([], [])); // true
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2], [1, 2, 3])); // false

// deep copy vs shallow copy - 


// Shallow Copy -

// What it is: A shallow copy creates a new object but does not create copies of the nested objects within it. Instead, it just copies the references to the nested objects.
// Example: If you copy an array that contains other arrays or objects, the copied array will still reference the original nested arrays or objects. Changes to the nested objects will affect both the original and the copied array.

let original = [1, [2, 3]];
let shallowCopy = [...original];
shallowCopy[1][0] = 99;
console.log(original); // [1, [99, 3]]
console.log(shallowCopy); // [1, [99, 3]]
// Here, changing shallowCopy affects original because they share references to the nested array [2, 3].


// Deep Copy -

// What it is: A deep copy creates a new object and also recursively creates copies of all objects nested within it. This means the copied object is completely independent of the original object.
// Example: If you deep copy an array that contains other arrays or objects, the copied array will have its own copies of the nested arrays or objects. Changes to the nested objects in the deep copy will not affect the original array.

let original1 = [1, [2, 3]];
let deepCopy = JSON.parse(JSON.stringify(original1)); // let deepCopy = original1 => 2 references pointing to the same object case
deepCopy[1][0] = 99;
console.log(original1); // [1, [2, 3]]
console.log(deepCopy); // [1, [99, 3]]
// Here, changing deepCopy does not affect original because they are completely independent.
// JSON.stringify(original1): This converts the original1 array into a JSON string. The resulting string representation of original1 would be " [1, [2, 3]] ".
// JSON.parse(...): This takes the JSON string and parses it back into a JavaScript object or array. This results in a new array that has the same structure and values as original1, but is a completely separate object in memory.


// In summary, a shallow copy is quicker but does not fully duplicate nested objects, while a deep copy fully duplicates everything, including nested objects.