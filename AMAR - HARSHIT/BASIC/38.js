// How to iterate object for (x in objectName) or for (x of object.keys(objectName))

const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// for in loop

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
//     // console.log(key," : " ,person[key]);
// }


// console.log(Object.keys(person)) // ['name', 'age', 'person hobbies']
// console.log(typeof (Object.keys(person))); // object
// const val = Array.isArray((Object.keys(person))); 
// console.log(val); // true


// Object.keys(<objName>) 

for (let key of Object.keys(person)) {
  console.log(person[key]);
}

for (let key in Object.keys(person)) {
  console.log(key, person[key]);
}

// 0 undefined
// 38.js:30 1 undefined
// 38.js:30 2 undefined

// 3. Object.values()
// This method returns an array of the object's own property values, which can be iterated over.


const personx = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(Object.values(personx))

Object.values(personx).forEach(value => {
    console.log(value);
});

// Output:
// John
// Doe
// 30




// Object.keys(person) => gives an array .Its a collection


// 4. Object.entries()
// Object.entries() returns an array of key-value pairs as arrays. 
// Each array contains two elements: the key and the value. 
// This can be particularly useful when you need both the key and the value during iteration.


const personY = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(Object.entries(personY))

// Using forEach to iterate over entries
Object.entries(personY).forEach(([key, value]) => { // [key, value] = arr destructuring
    console.log(key + ": " + value);
});

// Output:
// firstName: John
// lastName: Doe
// age: 30