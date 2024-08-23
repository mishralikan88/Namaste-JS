// var b = 10
// function a() {
//     console.log(b) // 10
// }
// a()



// var b = 10
// function a() {
//     function c(){
//         console.log(b)
//     }
//     c()
// }
// a()



// var b = 10
// function a() {
//     function c() {
//         console.log(window.b) // 10, global scoped b 
//         console.log(b) // undefined , b inside local/function scope 
//         var b = 100
//         console.log(b) // 100 , b inside local/function scope 
//     }
//     c()
// }
// console.log(b) // b inside global scope
// a()



// var b = 10
// function a() {
//     function c(){
//         console.log(b) // 10
//         b = 100 // b is window.b
//         console.log(b) // 100
//     }
//     c()
// }
// a()
// global variable b is changed here.



function a() {
    var b = 10;
    function c() {
        console.log(b)
    }
    c()
}
a()
console.log(b)

// b scope is limited to function a. When function a is finished executing b is garbage collected.
// Trying to access a variable which does not exist throws an error.