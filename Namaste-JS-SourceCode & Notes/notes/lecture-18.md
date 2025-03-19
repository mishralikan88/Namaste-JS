# Episode 18: Higher-Order Functions Featuring Functional Programming

# Q1: What is a Higher-Order Function?

Ans: Higher-order functions are regular functions that either take one or more functions as arguments or return a function as a result. 

```js
    function x() {
        console.log("Hi");
    };

    function y(x) {
        x();
    };

    y(x); // Hi
    // y is a higher-order function
    // x is a callback function
```

Now, let's understand how to approach a solution during an interview.
Suppose we have an array of radii, and we need to calculate the area for each radius and store the results in a new array.

# First Approach:

```js
    const radius = [1, 2, 3, 4];
    const calculateArea = function(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
       } 
    return output;
    }
    console.log(calculateArea(radius));
```

-> ✅ The above solution works perfectly fine.
-> ❌ But what if we now have a requirement to calculate the circumference?

The code would look like this:

```js
    const radius = [1, 2, 3, 4];
    const calculateCircumference = function(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
        } 
    return output;
    }
    console.log(calculateCircumference(radius));
```


Problem: We are repeating a lot of logic here, which violates the DRY Principle (Don't Repeat Yourself).

The parts we are repeating in this approach are:

**Looping through the array:** -

Both functions (calculateArea and calculateCircumference) have the same for loop to iterate through the array elements.

**Creating an output array:**

Both functions create a new array to store the calculated results.

**Pushing values into the output array:**

Both functions use output.push(...) to store the calculated values.

-> The only difference between the two functions is the calculation logic (area or circumference).
-> By using a Higher-Order Function (HOF), we avoid repeating these common parts and pass the calculation logic as a function parameter.
-> This makes the code more modular, reusable, and easy to maintain.

# Second Approach (Better One):

```js

    const radiusArr = [1, 2, 3, 4];

    // Logic to calculate area
    const area = function (radius) {
        return Math.PI * radius * radius;
    }

    // Logic to calculate circumference
    const circumference = function (radius) {
        return 2 * Math.PI * radius;
    }

    // Higher-order function to calculate any operation
    const calculate = function(radiusArr, operation) {
        const output = [];
        for (let i = 0; i < radiusArr.length; i++) {
            output.push(operation(radiusArr[i]));
        } 
        return output;
    }

    console.log(calculate(radiusArr, area));           // [3.14, 12.56, 28.27, 50.27]
    console.log(calculate(radiusArr, circumference));  // [6.28, 12.56, 18.84, 25.12]

```


We are reducing repetitive code here by:

**Abstracting the Calculation Logic:**

-> Instead of writing separate functions for calculating area and circumference, we define the calculation logic in individual functions (area and circumference).
-> These functions handle just the specific calculation, making them reusable.

**Using a Higher-Order Function:**

-> The calculate function is a generic HOF that takes any operation (like area or circumference) as an argument.
-> This eliminates the need to write separate functions with the same looping and pushing logic.

**Avoiding Duplicate Loops and Output Array Creation:**

-> Instead of duplicating the for loop and output array inside each calculation function, we use the same loop and output array inside the calculate function.
-> This makes the code more modular and reusable.

In short, we have one HOF that handles looping and array creation, while the specific calculation logic is passed as a function. This way, we reuse the common logic and reduce code duplication.



# Q2: What is a Polyphil ?

A polyfill is a browser fallback. It’s a piece of code that provides modern functionality to older browsers that don’t natively support it. In simple terms, if a new feature or function doesn’t work in an older browser, the polyfill replicates that functionality from scratch, allowing it to work as expected.

In our case, we are trying to create a polyfill for the map() function. 

The map() method is an array function in JavaScript that:

-> Iterates over every element in an array.
-> Applies a callback function to each element.
-> Returns a new array with the transformed elements.


**💡 Our Goal**

-> We will create a custom map() function named calculate() that works just like the built-in Array.prototype.map() method.

-> The goal is to:

    - Use a Higher-Order Function (HOF) to perform operations on each element.
    - Avoid repeating code when calculating different properties (like area or circumference).
    - Implement the polyfill for map() to extend the Array prototype.


```js
const radiusArr = [1, 2, 3, 4];

// Logic to calculate area
const area = function (radius) {
    return Math.PI * radius * radius;
};

// Logic to calculate circumference
const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

// Higher-Order Function (HOF) - Takes array and operation as arguments
const calculate = function(radiusArr, operation) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(operation(radiusArr[i])); // Applying operation to each element
    } 
    return output;
};

console.log(calculate(radiusArr, area));          // Calculates area
console.log(calculate(radiusArr, circumference)); // Calculates circumference

```

**👉 Why Use HOF Here?**

The calculate function:

-> Takes an array and an operation as arguments.
-> Uses a for loop to iterate through each element.
-> Calls the operation function on each element.
-> Returns a new array containing the result of each operation.


# Q3:🔗 Polyfill for map()

-> JavaScript provides a built-in map() method, but we will create our own polyfill to understand how it works internally.

**Creating a Polyfill**

```js
        Array.prototype.calculate = function(operation) {
            const output = [];
            for (let i = 0; i < this.length; i++) { // "this" refers to the array that calls "calculate" . this = radiusArr
                output.push(operation(this[i]));    // Applies the operation on each element
            } 
            return output; // Returns the transformed array
        };

        // Using our custom "calculate" method just like "map"
        console.log(radiusArr.calculate(area));          // Calculates area
        console.log(radiusArr.calculate(circumference)); // Calculates circumference
```


**📝 Explanation / How Does It Work?**


-> Prototype Inheritance:We are adding a method named calculate to the Array prototype.
This means all arrays in JavaScript can now use this method.

-> The this keyword inside the function refers to the array on which the method is called.

-> Iterating with for Loop -
    - We iterate through each element of the array.
    - The element is passed to the operation function.
    - The result is pushed into the output array.

-> Returning the Result:The final result is an array containing the transformed elements.

This mimics the behavior of Array.prototype.map().



# 🚀 Verification: Does Our Polyfill Work Like map()?

Let's check it with the built-in map() method:

```js
    console.log(radiusArr.map(area));           // Using built-in map()
    console.log(radiusArr.calculate(area));     // Using custom polyfill

    console.log(radiusArr.map(circumference));  // Using built-in map()
    console.log(radiusArr.calculate(circumference)); // Using custom polyfill
    Output (for both map() and calculate()):
```

**Output (for both map() and calculate())-**

[3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669]
[6.283185307179586, 12.566370614359172, 18.84955592153876, 25.132741228718345]


# Q4: 🚀 Why Not Use Built-in map() Directly?

While creating a polyfill is a great learning exercise, in practice, always use the built-in map() for production code because:

    - It’s optimized for performance.
    - It’s widely understood by developers.
    - It follows the ECMAScript standard.


<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=HkWxvB1RJq0&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/HkWxvB1RJq0/0.jpg" width="750"
alt="Higher-Order Functions ft. Functional Programming in JS Youtube Link"/></a>
