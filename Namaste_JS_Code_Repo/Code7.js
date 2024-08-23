// console.log(xyz) // Reference error - xyz is not defined.
// console.log(a) // Reference error - cannot access 'a' before initialisation.
// console.log(b)
// let a = 10
// var b = 15
// console.log(a)

// console.log(window.a) // undefined.In JavaScript, when you attempt to access a property or variable on the window object (or any object) that does not exist, you will get undefined. This is because undefined is the default value returned when trying to access a non-existent property on an object.

// console.log(window.b)


// ====== let vs const vs var - difference 1 =====

// let a
// a = 30
// console.log(a)

// const a
// a = 30
// console.log(a) // Syntax error - Declaration must be initialised

// var a
// a = 35
// console.log(a)


// ====== let vs const vs var - difference 2 =====

// let a = 20
// a = 30  // No error
// console.log(a)

// const a = 20
// a = 30
// console.log(a) // Type Error - Assignment to constant variable

// var a = 20
// a = 30
// console.log(a) // No error


// ====== let vs const vs var - difference 3 =====

// let a = 20
// let a = 30  // Syntax error - cant re-declare block scoped variable 'a'

// const a = 20
// const a = 30  // Syntax error - cant re-declare block scoped variable 'a'

// var a = 20
// var a = 30
// console.log(a) // re-declaration allowed. Output:30


// Strictness - var > let > const