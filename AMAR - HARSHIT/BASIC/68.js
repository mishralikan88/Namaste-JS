// Maps in js - dictionaries in python
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair
// const person = new Map(); // new Map([[k1,v1],[k2,v2],[k3,v3]])
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));       // python get(),keys(), set() -- set any type as key
// for(let key of person.keys()){    // for of loop , not for in loop like we do in object
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){  // like a python dictionary. [k1,v1],[k2,v2],[k3,v3] . destructuring is must.
//      console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
  id: 1,
  firstName: "harshit",
};
const person2 = {
  id: 2,
  firstName: "harshta",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
extraInfo.set(person2, { age: 9, gender: "female" });
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
