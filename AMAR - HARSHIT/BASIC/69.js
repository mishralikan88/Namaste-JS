// object cloning using Object.assign()

// const obj = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = { 'key69': "value69", ...obj }; // using spread synatx to create a separate object alltogether 
// const obj2 = Object.assign({ 'key69': "value69" }, obj); // using object.assign() 
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// Object.assign() is a method in JavaScript used to copy properties from one or more source objects to a target object.It is commonly used for cloning objects.However, it's important to understand the behavior and limitations of Object.assign() when cloning objects.

// Basic Usage
// Cloning an Object
// To clone an object using Object.assign(), you typically copy the properties of the source object to a new target object.

//     Example:

// const original = { name: 'John', age: 30 };
// const clone = Object.assign({}, original);
// console.log(clone); // Output: { name: 'John', age: 30 }

// In this example:

// Object.assign({}, original) creates a new object({}) and copies all properties from original to the new object.
// Handling Multiple Sources
// Object.assign() can also merge properties from multiple source objects into a single target object.

//     Example:

// const obj1 = { name: 'John' };
// const obj2 = { age: 30 };
// const obj3 = { country: 'USA' };
// const merged = Object.assign({}, obj1, obj2, obj3);
// console.log(merged); // Output: { name: 'John', age: 30, country: 'USA' }

// Object.assign() merges properties from obj1, obj2, and obj3 into a new object.


// Limitations and Considerations

// Shallow Copy: Object.assign() performs a shallow copy of properties. 
// This means it only copies the top - level properties, not nested objects or arrays.

//     Example:

// const original = { name: 'John', details: { age: 30, country: 'USA' } };
// const clone = Object.assign({}, original);
// console.log(clone.details === original.details); // Output: true
// In this example, details is a nested object.The clone shares the same reference to the details object as the original, meaning changes to details in the clone will also affect the original.


// const deepClone = JSON.parse(JSON.stringify(original));

// This method creates a deep copy but has limitations.