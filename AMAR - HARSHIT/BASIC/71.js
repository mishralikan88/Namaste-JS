// Method - Function inside object is called method. 

// const person = {
//     firstName: "Amar",
//     age: 18,
//     about: function () {
//         console.log(this.firstName) // this points to the object where the function about is called. this -> person
//     }
// }

// person.about() 




// Defining function outside of the object

// function personInfo() {
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);  // this points to the object where the function about is called.
// }

// const person1 = {
//     firstName: "harsh",
//     age: 8,
//     about: personInfo
// }
// const person2 = {
//     firstName: "mohit",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName: "nitish",
//     age: 17,
//     about: personInfo
// }

// person1.about(); // this inside about function is pointing to person1
// person2.about(); // this inside about function is pointing to person2
// person3.about(); // this inside about function is pointing to person3





// Remove this & observe the behavior

// function personInfo() {
//     console.log(`person name is ${firstName} and age is ${age}`);  
// }

// const person1 = {
//     firstName: "harsh",
//     age: 8,
//     about: personInfo
// }
// const person2 = {
//     firstName: "mohit",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName: "nitish",
//     age: 17,
//     about: personInfo
// }

// person1.about();

// Without using this, the personInfo function does not have a reference to the object it is meant to describe. In JavaScript, when you define a function outside of any object, and then call it as a method of an object, this inside the function refers to the object the method is called on. If you don't use this, the function will not know which object's properties to access, leading to the firstname is not defined error because firstName and age are not defined in the function's local scope.

// Let's break down what happens when you do not use this in your function:

// In the personInfo function, firstName and age are not declared within the function scope. Therefore, the JavaScript engine looks for these variables in the global scope, which does not contain firstName and age defined.

// What Actually Happens ?

// Global Context: When you run person1.about(), JavaScript tries to execute personInfo function. In this function, firstName and age are used directly, but they are not defined globally.

// Error: Since firstName and age are not available in the function's local scope or globally, you get a ReferenceError indicating that firstName is not defined.