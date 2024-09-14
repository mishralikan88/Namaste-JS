// while loop 

// syntax -

// while (condition) {
    // Code to be executed as long as the condition is true
//}


// print 0 to 9 

// DRY - Don't Repeat Yourself

let i = 0;

while(i<=9){  // i is  1 2 3 4 .. 9 in all iteration.
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`); // 10. why? because the i has been incremented to 10 and the condition inside while loop is evaluated to false.

console.log("hello");


// Below code is violating DRY

// let x = 0;
// console.log(x);
// x++;

// console.log(x);
// x++;

// console.log(x);
// x++;


// console.log(x);
// x++;

// console.log(x);
// x++;

// console.log(x);
// x++;

// console.log(x);
// x++;

// console.log(x);
// x++;

// console.log(x);
// x++;

// console.log(x);
// x++;