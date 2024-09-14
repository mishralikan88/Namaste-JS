// Sets - iterable

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// console.log(numbers)

// if (numbers.has(1)) { // if numbers set has value 1 in it
//     console.log("1 is present")
// } else {
//     console.log("1 is not present")
// }

// for (let number of numbers) {
//     console.log(number);
// }


// const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// const uniqueElements = new Set(myArray);

// let length = 0;
// for (let element of uniqueElements) {
//     length++;
// }

// console.log(length); // size of the set


// In JavaScript, a Set is a built -in object that allows you to store unique values of any type, whether primitives or objects.It automatically ensures that no duplicate values are stored.

// Key Characteristics:

// Unique Values: A Set automatically removes duplicate values.
//     Order: Values in a Set are ordered by insertion order.
//         Iterable: You can iterate over the elements in a Set in the order they were added.

// Basic Syntax: const mySet = new Set(<iterable>);
//             iterable (optional): An iterable object (like an array) whose elements will be added to the new Set.

//             Example 1: Creating a Set

//             const numbers = new Set([1, 2, 3, 4, 5]);
//             console.log(numbers); // Output:  Set(5) {1, 2, 3, 4, 5}

//             const stringset = new Set("Lycan");
//             console.log(stringset)


//             Example 2: Adding Values

//             const mySet = new Set();
//             console.log(mySet)
//             mySet.add(1);
//             mySet.add(2);
//             mySet.add(3);
//             console.log(mySet); // Output: Set {1, 2, 3}



//             Example 3: Adding Duplicate Values

//             const mySet = new Set();
//             mySet.add(1);
//             mySet.add(2);
//             mySet.add(2); // Duplicate value, will be ignored
//             console.log(mySet); // Output: Set {1, 2}


//             Example 4: Checking for Values

//             const mySet = new Set([1, 2, 3]);
//             console.log(mySet)
//             console.log(mySet.has(2)); // Output: true
//             console.log(mySet.has(4)); // Output: false

//             Example 5: Deleting Values

//             const mySet = new Set([1, 2, 3]);
//             mySet.delete(2);
//             console.log(mySet); // Output: Set {1, 3}


//             Example 6: Clearing All Values

//             const mySet = new Set([1, 2, 3]);
//             mySet.clear();
//             console.log(mySet); // Output: Set { }


//             Example 7: Iterating Over a Set.You can iterate over the elements of a Set using for...of, forEach, or other iterable constructs.

//             Using for...of

//             const mySet = new Set([1, 2, 3]);
//             for (const value of mySet) {
//                 console.log(value); // Output: 1, 2, 3
// }


//             Using forEach

//             const mySet = new Set([1, 2, 3]);
// mySet.forEach(value => {
//                 console.log(value); // Output: 1, 2, 3
// });
//             console.log(mySet.size) // size of the set



//             Example 8: Set Properties and Methods

//             size: Returns the number of values in the Set.
//             has(value): Checks if the value exists in the Set.
//             add(value): Adds a value to the Set.
//             delete(value): Removes a value from the Set.
//             clear(): Removes all values from the Set.


//             Example 9: Converting Set to Array

//             const mySet = new Set([1, 2, 3]); // {1, 2, 3}
//             console.log(mySet)
//             const arr = Array.from(mySet);
//             console.log(arr) // [1,2,3]


//             Use Cases:

//             Removing duplicates: When you need to remove duplicate values from an array.
//             Checking membership: For checking if a value exists in a collection.
//             Unique collections: When you need to maintain a collection of unique items.
//             Sets are particularly useful when you need to ensure that all values are unique and when you need fast access to check for existence or perform set operations.


//             1. Indexing not allowed.
//             True: Sets do not support indexing. Unlike arrays, you cannot access Set elements using index notation (set[0]), because Set elements are not ordered by index.

//             const mySet = new Set([1, 2, 3]);
//             console.log(mySet) // {1, 2, 3}
//             console.log(mySet[0]);  // Output: undefined


//             2. Order is not guaranteed. ( in old javascript versions )
//             False (For most practical cases): While sets don’t use indexing, in practice, they do maintain insertion order (i.e., the order in which elements were added) when iterated over. However, the order is not strictly guaranteed in all JavaScript environments.

//             const mySet1 = new Set([3, 1, 2]);
//             console.log([...mySet1]); // Output: [3, 1, 2]


//             set Operation

//             1. Union
//             The union of two sets contains all elements from both sets (no duplicates).

//             const setA = new Set([1, 2, 3]);
//             console.log(setA)
//             const setB = new Set([3, 4, 5]);
//             console.log(setB)
//             console.log([...setA, ...setB])
//             console.log(new Set([...setA,...setB])) // Output: Set {1, 2, 3, 4, 5}


//             2. Intersection
//             The intersection of two sets contains only the elements that are present in both sets.

//             Example:

//             const setA = new Set([1, 2, 3]);
//             const setB = new Set([2, 3, 4]);
// const intersectionArray = [...setA].filter(x => setB.has(x))

//             console.log(intersectionArray)
//             console.log(new Set(intersectionArray)) // Output: Set {2, 3}


//             3. Difference
//             The difference of two sets (A - B) contains the elements that are in set A but not in set B.

//             Example:

//             const setA = new Set([1, 2, 3]);
//             const setB = new Set([2, 3, 4]);
// const DifferenceArray = [...setA].filter(x => !setB.has(x))
//             console.log(DifferenceArray)
//             console.log(new Set(DifferenceArray)); // Output: Set {1}


//             4. Symmetric Difference
//             The symmetric difference contains elements that are in either set A or set B, but not in both (i.e., elements that are unique to each set).

//             Example:

//             const setA = new Set([1, 2, 3]);
//             const setB = new Set([3, 4, 5]);

// const setADifference = [...setA].filter(x => !setB.has(x))
//             console.log(setADifference)

// const setBDifference = [...setB].filter(x => !setA.has(x))
//             console.log(setBDifference)

//             const symmetricDifference = new Set([
//             ...setADifference,
//             ...setBDifference
//             ]);

//             console.log(symmetricDifference); // Output: Set {1, 2, 4, 5}


//             5. Subset Check
//             A set is a subset of another set if all elements of the first set are contained in the second set.

//             Example:
//             const setA = new Set([1, 2]);
//             const setB = new Set([1, 2, 3]);
// const isSubset = [...setA].every(x => setB.has(x));
//             console.log(isSubset); // Output: true


//             6. Superset Check
//             A set is a superset of another set if it contains all elements of the other set.

//             Example:
//             const setA = new Set([1, 2, 3]);
//             const setB = new Set([1, 2]);
// const isSuperset = [...setB].every(x => setA.has(x));
//             console.log(isSuperset); // Output: true