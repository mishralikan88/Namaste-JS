// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key3: "value3",
// };
// console.log(obj2.key1); // undefined.

//JavaScript should first search for key1 in obj2. If it's not found there, JavaScript should then check obj1. If key1 is found, log the result to the console.


// JavaScript Object Creation and Prototype Inheritance

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);
console.log(obj2); // obj2 is {} but obj2 has a prototype connection with obj1. This connection is referred to as __proto__ or [[Prototype]].

// Object.create(obj1):

// This method creates a new object (obj2) that uses obj1 as its prototype.
// The new object (obj2) does not have its own properties initially. It inherits properties from obj1 via the prototype chain.

// Prototype Chain:

// The __proto__ property (or [[Prototype]] in internal terms) of obj2 points to obj1. This means obj2 can access properties of obj1 even though obj2 itself does not have those properties directly.

obj2.key3 = "value3"; // Adds key3 to obj2
console.log(obj2); // Shows obj2 as { key3: 'value3' }

// Adding Properties:
// When you add key3 to obj2, it becomes a property of obj2 itself.
// This does not affect obj1. Now, obj2 directly contains key3 with the value 'value3'.

console.log(obj2.key1); // Retrieves key1 from obj1 via the prototype chain


console.log(obj2.__proto__); // prints obj1 . __proto__ is dunder property

// Property Lookup:
// When accessing obj2.key1, JavaScript first looks for key1 in obj2. Since key1 is not found in obj2, JavaScript looks up the prototype chain and finds key1 in obj1.
// Thus, obj2.key1 retrieves the value 'value1' from obj1.

// Summary:
// Object.create(obj1) creates a new object with obj1 as its prototype.
// The new object (obj2) initially has no properties but inherits properties from obj1.
// Properties added to obj2 are unique to obj2 and do not affect obj1.
// Property access on obj2 will check obj2 first and then the prototype (obj1) if the property is not found directly on obj2.


// Note: The prototype is a distinct concept. Avoid confusing it with other concepts.