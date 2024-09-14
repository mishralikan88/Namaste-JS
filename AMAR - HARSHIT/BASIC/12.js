// booleans & comparison operator

// booleans
// true, false

// let num4 = 1
// let num5 = 2
// console.log(num4 > num5)
// console.log(num4 < num5)

// let num1 = 7;
// let num2 = "8";

// console.log(num1<num2); // Implicit conversion happens for num2 . "8" -> 8 . Then 7 is compared with 8

//  != vs !==

// != Loose inequality

// Purpose: Checks if two values are not equal.

// Type Coercion: Yes, != performs type coercion. This means that it converts the operands to the same type before making the comparison.

// 5 != '5'    // false, because '5' is converted to number 5
// 0 != false  // false, because false is converted to number 0
// null != undefined // false, null and undefined are considered equal in loose comparison


// !== (Strict Inequality)

// 5 !== '5'    // true, because one is a number and the other is a string
// 0 !== false  // true, because one is a number and the other is a boolean
// null !== undefined // true, because null and undefined are different types



//  == vs ===

// == (Loose Equality)
// Purpose: Checks if two values are equal, with type coercion.

// Type Coercion: Yes, == performs type coercion. It converts the operands to the same type before making the comparison.

// 5 == '5'        // true, because '5' is coerced to number 5
// 0 == false      // true, because false is coerced to number 0
// null == undefined // true, null and undefined are considered equal in loose equality
// [] == false    // true


// === (Strict Equality)
// Purpose: Checks if two values are equal without type coercion.

// Type Coercion: No, === does not perform type coercion. It checks both value and type.

// 5 === '5'        // false, because one is a number and the other is a string
// 0 === false      // false, because one is a number and the other is a boolean
// null === undefined // false, because null and undefined are different types
// '0' === false   // false, because '0' is a string and false is a boolean
// [] === false    // false, because [] is an object and false is a boolean