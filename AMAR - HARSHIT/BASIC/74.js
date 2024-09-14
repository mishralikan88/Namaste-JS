// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this) // window 
//         console.log(this.firstName, this.age); // undefined undefined
//     }   
// }
// const myFunc =  user1.about; // storing function reference inside myFunc
// console.log(myFunc) // f{...}
// myFunc() 


// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this) // window 
//         console.log(this.firstName, this.age); // undefined undefined
//     }   
// }
// const myFunc = user1.about.bind(user1);
// console.log(myFunc)
// myFunc();




// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about: function () {
//         console.log(this)                      // {firstName: 'harshit', age: 8, about: ƒ} 
//         console.log(this.firstName, this.age); // harshit 8
//     }
// }
// user1.about();