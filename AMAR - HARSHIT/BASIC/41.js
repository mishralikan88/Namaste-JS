// object destructuring . syntax - const { property1, property2 } = object; // unpacking

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName); // bandName => led zepplin
console.log(restProps); // restProps => {year: 1968, anotherFamousSong: 'kashmir'}

// Renaming Variables

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Rename firstName to fName
const { firstName: fName, age: personAge } = person;

console.log(fName);      // Output: "John"
console.log(personAge);  // Output: 30

// 2. Default Values
// If the property does not exist in the object, you can provide a default value.

// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const { firstName, age = 25 } = person;

// console.log(firstName);  // Output: "John"
// console.log(age);        // Output: 25 (default value)

// 3. Nested Object Destructuring
// You can destructure nested objects by following the structure of the object.


const user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: 10001
    }
};

const { name, address: { city, zip } } = user;

console.log(name);  // Output: "Alice"
console.log(city);  // Output: "New York"
console.log(zip);   // Output: 10001

// 5. Destructuring Function Parameters
// You can destructure an object directly in a function's parameter list.


// function displayPerson({ firstName, age }) {
//     console.log(`${firstName} is ${age} years old.`);
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// displayPerson(person); // Output: "John is 30 years old."

// 6. Aliasing in Nested Destructuring
// When dealing with nested objects, you can also alias values from deeper levels.

// const person = {
//     name: "John",
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// };

// // Alias city as town
// const { address: { city: town } } = person;

// console.log(town);  // Output: "New York"