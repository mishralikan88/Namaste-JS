// In Js, when you declare an array (or object) with const, it means that the reference to the array cannot be reassigned, but the contents of the array (or object) can still be modified. This is because const only prevents reassigning the variable itself, not the mutation of the data it refers to.

// In other words, you cannot do this.

// const fruits = ["apple", "mango"];
// fruits = ["banana"];  // ❌ Error: Assignment to constant variable.

// But you can modify the array's contents:

// const fruits = ["apple", "mango"]; // Reference (0x11 in your example)
// fruits.push("banana");             // ✅ This modifies the array, but not the reference

// console.log(fruits);  // Output: ["apple", "mango", "banana"]

// Why does this happen?

// const only protects the reference: When you declare an array or object with const, you're locking the reference (the pointer to where the data is stored in memory) to that array or object. However, the data itself is still mutable.
// Arrays and objects are mutable: Even though the reference is constant, the contents can be changed (added, removed, updated) because arrays and objects are mutable by nature in JavaScript.