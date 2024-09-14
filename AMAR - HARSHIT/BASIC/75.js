// In JavaScript, the behavior of this depends on how a function is called and defined. With arrow functions, this is lexically bound, meaning it does not refer to the object that calls the function but rather inherits this from its surrounding context when the function is defined.

// Explanation of the Code

const user1 = {
    firstName: "harshit",
    age: 8,
    about: () => {
        console.log(this); // window (in browsers)
        console.log(this.firstName, this.age); // undefined undefined
    }
}

user1.about();

// Arrow Functions & this:

// Unlike regular functions, arrow functions do not have their own this context. Instead, they capture the value of this from the outer scope where the arrow function is defined.
// In this case, the arrow function about is defined inside the object user1, but it does not have its own this. Therefore, it tries to inherit this from the surrounding context.
// Global Context (window or global):
// If you run this code in a browser, the surrounding context is the global object, which is the window object.
// As a result, this inside the arrow function points to the window object, not the user1 object.
// this.firstName and this.age:
// Since this refers to the window object (which doesn't have firstName or age properties), when you try to access this.firstName and this.age, they return undefined.

// Key Takeaway:

// Arrow functions don't bind their own this; they capture it from the context in which they are created. In this case, the surrounding context is the global object (window in browsers), which is why this.firstName and this.age are undefined.