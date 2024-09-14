
// How to concatenate 2 arrays ?

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array3 = array1.concat(["itemx", "itemy"]); // array1.concat(["itemx","itemy"]) creates a new array.array1 will not be mutated.
// console.log(array3); //  ['item1', 'item2', 'itemx', 'itemy']
// console.log(array1); //  ["item1", "item2"]

// let array2 = array1.slice(0).concat(["item3", "item4"]); //  ['item1', 'item2', 'item3', 'item4']
// let array2 = [].concat(array1,["item3", "item4"]);

// concat() - The concat() method in JavaScript creates a new array and does not modify the existing array. It combines the elements of the array it's called on with the provided array(s) or value(s), returning a new array.

// 1. Concatenating Two Arrays

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = arr1.concat(arr2);
// console.log(result); // Output: [1, 2, 3, 4]


// 2. Concatenating Multiple Arrays

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let result = arr1.concat(arr2, arr3);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// 3. Concatenating Arrays with Primitive Values

// let arr1 = [1, 2];
// let result = arr1.concat(3, 4);
// console.log(result); // Output: [1, 2, 3, 4]

// 4. Concatenating with an Empty Array

// let arr1 = [1, 2];
// let result = arr1.concat([]);
// console.log(result); // Output: [1, 2]

// 5. Concatenating Empty Arrays

// let arr1 = [];
// let arr2 = [];
// let result = arr1.concat(arr2);
// console.log(result); // Output: []

// 6. Concatenating Objects

// let arr1 = [1, 2];
// let obj = { name: 'test' };
// let result = arr1.concat(obj);
// console.log(result); // Output: [1, 2, { name: 'test' }]

// 7. Concatenating Arrays with Nested Arrays (No Flattening)

// let arr1 = [1, 2];
// let arr2 = [[3, 4]];
// let result = arr1.concat(arr2);
// console.log(result); // Output: [1, 2, [3, 4]]
// The concat() method does not flatten nested arrays. It adds the array as an element of the result.

// 8. Concatenating Strings

// let arr1 = [1, 2];
// let str = "hello";
// let result = arr1.concat(str);
// console.log(result); // Output: [1, 2, "hello"]

// 9. Concatenating Boolean Values

// let arr1 = [1, 2];
// let result = arr1.concat(true, false);
// console.log(result); // Output: [1, 2, true, false]

// 10. Concatenating with null & undefined

// let arr1 = [1, 2];
// let result = arr1.concat(null, undefined);
// console.log(result); // Output: [1, 2, null, undefined]

// 11. Concatenating Arrays and Functions

// let arr1 = [1, 2];
// let func = function() { return "test"; };
// let result = arr1.concat(func);
// console.log(result); // Output: [1, 2, ƒ]

// 12. Concatenating with a Mix of Values

// let arr1 = [1, 2];
// let result = arr1.concat([3, 4], 5, {key: "value"}, ["a", "b"], null);
// console.log(result);  // Output: [1, 2, 3, 4, 5, {key: "value"}, "a", "b", null]

// Key Point:

// concat() does not mutate the original array. It returns a new array.


// cloning of an array using spread operator

// spread operator - spreads the array into indivisual arr elements .
// If arr = [ele1,ele2] , ...arr gives ele1,ele2. unpacking .

// let array1 = ["item1", "item2"];
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];
// array1.push("item3");
// console.log(array1 === array2);
// console.log(array1)
// console.log(array2)