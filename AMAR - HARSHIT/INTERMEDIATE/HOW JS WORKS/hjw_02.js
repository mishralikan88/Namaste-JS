// hoisting
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);


// Explain hoisting (variable hoisiting function hoisting ,arrow function hoisting ), lexical stuff. consider all hoisting scenarios 
// explain how the code works in terms of execution ocntext , global execution context , stack ,function execution context