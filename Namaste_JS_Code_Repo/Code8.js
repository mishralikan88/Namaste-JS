// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(window.b)


// console.log(x) // Not Defined. Execution-Context Environment
// console.log(window.x) // undefined. Browser Web-API Environment


// var-var shadowing

// var a = 10
// {
//     var a = 20
//     var b = 30
//     console.log("a inside block", a)
// }
// console.log("a outside block", a) // global scoped 'a' is manipulated.

// var a = 10
// {
//     a = 20
//     var b = 30
//     console.log("a inside block", a)
// }
// console.log("a outside block", a) // global scoped 'a' is manipulated.



// let-let shadowing

// let a = 10 // script scoped a
// {
//     let a = 20 // blocked scoped a
//     var b = 30
//     console.log("a inside block", a)
// }

// console.log("a outside block", a)

// let a = 10 // script scoped a
// {
//     a = 20 // script scoped a
//     var b = 30
//     console.log("a inside block", a)
// }

// console.log("a outside block", a)


// var-let shadowing

// var a = 10 // global scoped a
// {
//     let a = 20 // blocked scoped a
//     var b = 30
//     console.log("a inside block", a)
// }

// console.log("a outside block", a)


// let-var shadowing

// let a = 10  // script scoped a
// {
//     var a = 20  // global scoped a
//     var b = 30
//     console.log("a inside block", a)
// }

// console.log("a outside block", a)

// compiler got confused thinking which 'a' i need to have access to.Raises syntax error upfront.

// 'a' has already been declared.


// var a = 10
// let a = 10
// console.log(a) // syntax error - 'a' has already been declared.

// let a = 10
// var a = 10
// console.log(a) // syntax error - 'a' has already been declared

// 'let' restricts variable redeclaration in the same scope.But 'var' allows it, Thats why 'let' is more strict than 'var'.


// Bypassing let-var shadowing using function.'var' is function scoped.

// Meaning If we initialise a variable within a function then the variable can be accessed within the same function.But not outside of the function.

// let a = 10  // script scoped a
// function x() {
//     var a = 20  // local function scoped a
//     console.log("a inside block", a)
// }
// x()
// console.log("a outside block", a)


// {
//     var a = 20

//     {
//         console.log(a)

//     }
// }

// Nested block follows scope-chain pattern



// var a = 1; // a is in global scope 
// function foo() {
//   a = 10;  // a is in local scope . both a's are different
//   return;
//   function a() {}
// }
// foo();
// console.log(a); // 1 