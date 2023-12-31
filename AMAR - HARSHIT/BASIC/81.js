function hello() {
  console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name); // hello . hello is object having name property.

// you can add your own properties

// hello.myOwnProperty = "very unique value";

// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more useful properties.

// once you define a function, It provides a free space/empty object {} called prototype.

// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";

// hello.prototype.xyz = "xyz";

// hello.prototype.sing = function(){
//     return "lalalla";
// };

// console.log(hello.prototype.sing());
