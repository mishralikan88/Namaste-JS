// closure - Function along with its lexical scope forms a closure

// Example 1 
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a) // Inside function y, we will have access to global,local & closure scoped variables and functions.
//     }
//     y()
// }
// x()

// here y function along with its lexical environment(x's environment) forms a closure.




// Example 2 -

// function x() {
//     let a = 10;
//     console.log("=== We are inside local scope of x function ===")
//     console.log("a = ", a)
//     function y() {
//         let b = 20;
//         console.log("=== We are inside local scope of y function + Lexical environment of x ===")
//         console.log("a = ", a)
//         console.log("b = ", b)
//         function z(c) {
//             console.log("=== We are inside local scope of z function + Lexical environment of y+x ===")
//             console.log("a = ", a)
//             console.log("b = ", b)
//             console.log("c = ", c)
//         }
//         z(25)
//     }
//     y()
// }
// x()



// Example 3 - Function returning another function.

// The returned function is lexically scoped inside the parent function.

// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var z = x() // f y(){...}
// console.log(z)
// z() // y function is executed which logs 7 in the console. 

// Where does js Engine gets 'a' value . Its not even there in global scope. Its not even exist in local scope as well ?

// Ans is : It will fetch 'a' from the closure.

// Closure is a temporay memory space with some values in it which later garbage collected when unused. 




// Example 4 -

// function x() {
//     var a = 7
//     function y() {
//         console.log(a)
//     }
//     var a = 100
//     return y // returns function y along with the reference of a. The value of a is not returned.but the reference of a is returned.
// }
// var returnedFunction = x()
// returnedFunction() // function y is executed.This y function has access to the closure variable 'a' reference.


// Example 5

function z() {
    var b = 900
    function x() {
        var a = 7
        function y() {
            console.log(a, b)
        }
        y()
    }
    x()
}
z()

