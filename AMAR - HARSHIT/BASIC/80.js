// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key3: "value3",
// };
// console.log(obj2.key1); // undefined.I dont want this.I want javascript to find key1 in obj2, if not found JS should check the same in obj1.if found console the result.

// ================================================
// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = object.create(obj1); //obj2 is empty object {} but obj2 established a connection with obj1.That connection is __proto__
// obj2.key3 = "value3"; // Now obj2 has 1 attribute key3
// console.log(objx.key1); // gets this key from obj1
// ================================================

// Why this is happening?
console.log(obj2); // objx has key3 attribute and __proto__.
// If we expand __proto__ we see obj2 has obj1 reference.
// obj1 has same __proto__ that points to the base object reference.
// This form __proto__ chain.

//=================================================
// // __proto__
// // offical ecmascript documentation - [[prototype]]
// // prototype is a different thing.
// const obj2 = Object.create(obj1); // {}
// // There is one more way to create empty object
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// console.log(obj2);
// console.log(obj2.__proto__); // prints obj1
