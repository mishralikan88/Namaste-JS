// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Harshit",age:22}; // python dictionary
const person = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(person);

// how to access data from objects
// console.log(person["name"]); // while accessing using [] use key as string - bracket notation
// console.log(person["age"]);
// console.log(person.hobbies); // while access using . use key directly. - DOT (.) notation

// how to add key value pair to objects
person["person"] = "male";
console.log(person);
