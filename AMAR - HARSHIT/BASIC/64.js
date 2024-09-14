// fill method - fills indexed element(s) with the supplied value. Mutates the original array
// value , start , end(exclusive)

// const myArray = new Array(10) // (10) [empty × 10] 
// console.log(myArray)
// myArray.fill(0)
// console.log(myArray)

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// myArray.fill(0, 2, 5);
// console.log(myArray);

// The fill() method in JavaScript is used to fill all the elements of an array with a static value, from a start index to an end index (both optional). It modifies the original array in place and returns the modified array.

// Syntax: array.fill(value, start, end)

// value: The value to fill the array with.
// start (optional): The index to start filling (default is 0).
// end (optional): The index to stop filling (default is the length of the array, i.e., it fills till the end).

// Example 1: Basic Usage

// const arr = [1, 2, 3, 4, 5];
// arr.fill(0); // Fill the entire array with 0
// console.log(arr); // Output: [0, 0, 0, 0, 0]

// Example 2: Using start and end

// const arr = [1, 2, 3, 4, 5];
// arr.fill(0, 2); // Fill with 0 starting from index 2 to the end
// console.log(arr); // Output: [1, 2, 0, 0, 0]

// Example 3: Filling a Specific Range

// const arr = [1, 2, 3, 4, 5];
// arr.fill(7, 1, 3); // Fill with 7 from index 1 to 3 (index 3 is exclusive)
// console.log(arr); // Output: [1, 7, 7, 4, 5]


// Notes:
// start is inclusive, meaning the filling starts from the start index.
// end is exclusive, so the filling stops before the end index.
// If start or end is negative, it will be treated as an offset from the end of the array.
// Example 4: Using Negative Indexes

// const arr = [1, 2, 3, 4, 5];
// arr.fill(9, -2);  // Fill with 9 starting from the second last element to the end
// console.log(arr); // Output: [1, 2, 3, 9, 9]

// In this example, -2 refers to the second last element & the filling continues until the end of the array.