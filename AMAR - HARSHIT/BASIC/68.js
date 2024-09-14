// Maps in js - dictionaries in python
// map is an iterable

// store data in ordered fashion

// store key value pair(like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

//   in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//   firstName: "harshit",
//   age: 7,
//   1: "one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for (let key in person) {
//   console.log(typeof key);
// }

// key value pair
// const person = new Map(); // new Map([[k1,v1],[k2,v2],[k3,v3]])
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1, 'one');
// person.set([1, 2, 3], 'onetwothree');
// person.set({ 1: 'one' }, 'onetwothree');
// console.log(person);
// console.log(person.get(1));       // python get(),keys(), set() -- set any type as key
// for (let key of person.keys()) {    // for of loop , not for in loop like we do in object
//   console.log(key, typeof key);
// }
// for (let [key, value] of person) {  // like a python dictionary. [k1,v1],[k2,v2],[k3,v3] . destructuring is must.
//   console.log(Array.isArray(key));
//   console.log(key, value)
// }

// const person1 = {
//   id: 1,
//   firstName: "harshit",
// };
// const person2 = {
//   id: 2,
//   firstName: "harshta",
// };

// const extraInfo = new Map();
// extraInfo.set(person1, { age: 8, gender: "male" });
// extraInfo.set(person2, { age: 9, gender: "female" });
// console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);

// In JavaScript, a Map is a collection of key value pairs where both the keys and values can be of any type. Unlike plain JavaScript objects, which only allow strings or symbols as keys, a Map can have objects, functions, or any primitive type as keys.

// Key Features of a Map:

// Key-Value Pairs: A Map stores data in the form of key-value pairs.

// Any Data Type as Keys: Unlike objects, which use only strings or symbols for keys, Map keys can be any type (objects, functions, etc.).

// Order of Insertion: Maps maintain the order of insertion, meaning when you iterate over a map, the values will be returned in the same order as they were added.

// Size Property: A Map has a size property that returns the number of key-value pairs in the map.

// Unique Keys: Just like an object, each key in a Map is unique.

// Basic Usage -

// const myMap = new Map();
// console.log(myMap)                // Map(0) {size: 0}
// myMap.set('name', 'John');        // String key
// myMap.set(1, 'One');              // Number key
// myMap.set(true, 'Boolean');       // Boolean key
// console.log(myMap)                // Map(3) {'name' => 'John', 1 => 'One', true => 'Boolean'}
// console.log(myMap.get('name'));   // Output: 'John'
// console.log(myMap.get(1));        // Output: 'One'
// console.log(myMap.size);          // Output: 3


// Creating a Map
// You can create a Map using the new Map() constructor. Optionally, you can initialize it with an iterable (like an array of key-value pairs).

// Example: const mapVariableName = new Map(<an array of arrays, where each inner array has two elements: one is the key, and the other is the value>)

// const <mapVar> = new Map([
//   [key1, val1],
//   [key2, val2],
//   [key3, val3]
//   ]);

//   const myMap = new Map([
//   ['name', 'Alice'],
//   ['age', 30],
//   ['city', 'New York']
//   ]);
//   console.log(myMap.get('name'));     // Output: 'Alice'
//   console.log(myMap.size);            // Output: 3

// Methods of Map:
// set(key, value): Adds a key-value pair to the map.
// myMap.set('color', 'blue');
// myMap.set('city', 'London');
// console.log(myMap)

// get(key): Returns the value associated with the specified key.
// console.log(myMap.get('color')); // Output: 'blue'


// has(key): Checks if the map contains a specific key.
// console.log(myMap.has('age')); // Output: true



// delete(key): Removes a key-value pair from the map.
// myMap.delete('age');
// console.log(myMap)

// clear(): Removes all key-value pairs from the map.
// myMap.clear();
// console.log(myMap)

// size: Returns the number of key-value pairs in the map.
// console.log(myMap.size); // Output: 0


// Iterating Over a Map:
// Maps are iterable, and you can use loops or higher-order functions to iterate through them.



// for...of loop:

// const myMap = new Map([
//   ['name', 'Alice'],
//   ['age', 30],
//   ['city', 'New York']
// ]);

// for (let items of myMap) {
//   const [key, value] = items
//   console.log(items)
//   console.log(`${key}: ${value}`);
// }

// for (let [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }

// Output:
// name: Alice
// age: 30
// city: New York


// forEach() method:

// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// keys(), values(), entries():

// keys(): Returns an iterator for the keys.
// values(): Returns an iterator for the values.
// entries(): Returns an iterator for key-value pairs.

// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())

// for (let key of myMap.keys()) {
//   console.log(key); // Output: name, age, city
// }

// for (let value of myMap.values()) {
//   console.log(value); // Output: Alice, 30, New York
// }

// for (let [key, value] of myMap.entries()) {
//   console.log(key, value); // Output: name Alice, age 30, city New York
// }


// Differences Between Map and Object:

// Key Types: Objects only allow strings and symbols as keys, while Map allows any type.
// Order: Maps preserve the insertion order of keys, while objects do not guarantee this behavior (although in modern JavaScript, insertion order is mostly maintained in objects).
// Size Property: Maps have a size property to get the number of elements, while objects require manual counting of keys.
// Performance: Maps are generally optimized for key-value pair manipulations, making them more efficient in cases where frequent additions and deletions are required.
// Summary:
// Use a Map when you need a key-value store where keys can be of any type and you want guaranteed insertion order.
// Use an object if you only need string or symbol keys and don't need specific operations like iterating in insertion order or maintaining a size property.

// size of the object

// const myObject = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   profession: 'Developer'
// };

// Calculate the number of properties

// const propertyCount = Object.keys(myObject).length;
// console.log(`The object has ${propertyCount} properties.`); // Output: The object has 4 properties.

// symbols -


// In JavaScript, Symbols are a unique and immutable primitive data type introduced in ES6 (ECMAScript 2015). They are often used to create unique object keys, avoiding property name collisions, and enabling metaprogramming features in JavaScript. metaprogramming features => do some research

// Key Characteristics of Symbols:

// Unique and Immutable: Every symbol is unique, even if two symbols are created with the same description (label).
// Used as Object Keys: Symbols can be used as object property keys to create properties that cannot be accidentally overwritten. (explained later)
// Not Enumerated in Loops: Symbol properties are not included in for...in loops or Object.keys(), but they can be accessed explicitly.

// Creating a Symbol: You can create a symbol by calling the Symbol() function.


// Example:

// const mySymbol = Symbol('description');

// The optional description (in this case, 'description') is used only for debugging purposes and has no effect on the symbol's uniqueness.
// Symbols are unique even if the description is the same.

// Example of Uniqueness:

// const symbol1 = Symbol('desc');
// const symbol2 = Symbol('desc');
// console.log(symbol1 === symbol2); // Output: false (even with the same description)

// Using Symbols as Object Keys:
// Symbols can be used as object property keys, ensuring that the properties are unique and not accidentally overwritten by another property with the same name.

// Example:

// const mySymbol = Symbol('myKey');
// const myObject = {
//   [mySymbol]: 'This is a symbol key'
// };

// console.log(myObject[mySymbol]); // Output: 'This is a symbol key'


// You access symbol-keyed properties using square bracket notation ([mySymbol]), as dot notation does not work with symbols.


// Why Use Symbols?

// Uniqueness: Symbols guarantee that no other part of the code, or third-party library, will overwrite or interfere with your property values.
// Hidden Properties: Symbols provide a way to create "hidden" object properties, as they are not enumerable like regular object properties.
// Metaprogramming: Symbols are used as keys for certain JavaScript internal behaviors and APIs (well-known symbols).
// Symbols are Not Enumerable
// Symbol properties do not appear in typical enumerations like for...in, Object.keys(), or JSON.stringify().
// They are accessible via Object.getOwnPropertySymbols().

// Example:

// const mySymbol = Symbol('myKey');
// const obj = {
//   [mySymbol]: 'symbol value',
//   regularKey: 'regular value'
// };

// for (let key in obj) {
//   console.log(key); // Output: 'regularKey' (Symbol key is not included)
// }

// console.log(Object.keys(obj)); // Output: ['regularKey']
// console.log(Object.getOwnPropertySymbols(obj)); // Output: [ Symbol(myKey) ]


// Preventing Accidental Collisions

// When using symbols, you can avoid naming collisions because symbols provide a way to define properties with a unique key that is not easily replicated. This is particularly useful when dealing with third-party libraries or code where you need to add properties without risking clashes with existing properties.

// Example:

// const uniqueSymbol = Symbol('unique');

// const libraryObject = {
//   [uniqueSymbol]: 'library specific value'
// };

// const userObject = {
//   [uniqueSymbol]: 'user specific value'
// };

// console.log(libraryObject[uniqueSymbol]); // Output: 'library specific value'
// console.log(userObject[uniqueSymbol]); // Output: 'user specific value'


// In this example, uniqueSymbol is used as a key in both libraryObject and userObject, and it uniquely identifies properties in each object without collision.



// In JavaScript, object keys can be accidentally overwritten due to the nature of how property names (keys) are handled in objects. Here’s a detailed explanation of how this can happen and how symbols help mitigate this issue:


// String and Symbol Keys:

// String Keys: When using strings as keys for object properties, there is a risk of accidental overwriting if two or more properties share the same name. For example, if a property is added with the key 'name' and later another property with the same key is added, the latter will overwrite the former.

// Symbol Keys: Symbols are unique and immutable, so they provide a way to avoid accidental overwrites. When a symbol is used as a key, it guarantees uniqueness, even if the same description is used.

// Example with String Keys:

// const myObject = {
//   name: 'John',
//   age: 30
// };

// Adding a property with the same key overwrites the previous one
// myObject.name = 'Jane';
// console.log(myObject.name); // Output: 'Jane'

// In the above example, the property 'name' was initially set to 'John', but when a new value is assigned to the same key, it overwrites the previous value.


// How Symbols Prevent Accidental Overwrites ?
// Symbols are inherently unique, so using them as keys for object properties ensures that each property has a distinct key. This prevents the risk of accidental overwrites because each symbol key is guaranteed to be different.

// Example with Symbol Keys:

// const uniqueSymbol = Symbol('uniqueKey');

// const myObject = {
//   [uniqueSymbol]: 'This is a unique property'
// };

// Attempting to overwrite using the same symbol key
// myObject[uniqueSymbol] = 'New value';

// console.log(myObject[uniqueSymbol]); // Output: 'New value'


// In this example, even though the property value is updated, the key remains unique and distinct from any other keys.


// When using strings as object keys, overwriting can also occur unintentionally if:
// Merging Objects: When combining or merging objects, properties with the same key names will overwrite each other.


// const obj1 = { name: 'John' };
// const obj2 = { name: 'Jane' };
// const merged = { ...obj1, ...obj2 };
// console.log(merged.name); // Output: 'Jane' (obj2 overwrites obj1)


// Dynamic Property Assignment: If property names are dynamically generated or retrieved from variables, there is a risk of accidentally overwriting properties if the generated names are not unique.

// const key = 'dynamicKey';
// const obj = {};
// obj[key] = 'value1';
// obj[key] = 'value2';

// console.log(obj[key]); // Output: 'value2'



// Summary notes -

// String Keys: Can be accidentally overwritten if two properties use the same key. This is a common risk in JavaScript when adding or modifying properties in objects.
// Symbols: Provide a mechanism to avoid this issue due to their uniqueness. Symbol keys ensure that each property key is distinct, thus preventing accidental overwrites.
// By using symbols as keys, you can create object properties that are safe from accidental overwrites, which is especially useful in large codebases or when integrating with third-party code.


// Symbols prevent accidental property name collisions and overwriting due to their unique and immutable nature. Here’s a detailed explanation of how symbols achieve this:

// 1. Unique Identification
// Each symbol is guaranteed to be unique. When you create a symbol, it is different from any other symbol, even if they have the same description.

// Example:

// const symbol1 = Symbol('description');
// const symbol2 = Symbol('description');

// console.log(symbol1 === symbol2); // Output: false

// In this example, symbol1 and symbol2 are distinct symbols, despite having the same description. This uniqueness ensures that symbols used as object keys are never inadvertently overwritten by other properties.

// 2. Symbol as Object Key
// When a symbol is used as an object key, it creates a unique property that cannot be accidentally overwritten by other properties.

// Example:

// const uniqueSymbol = Symbol('uniqueKey');
// const myObject = {
//   [uniqueSymbol]: 'This is a unique property'
// };

// Adding another property with the same key (a string key, for instance) does not affect the symbol key
// myObject['uniqueKey'] = 'Some other value';

// console.log(myObject[uniqueSymbol]); // Output: 'This is a unique property'
// console.log(myObject['uniqueKey']); // Output: 'Some other value'