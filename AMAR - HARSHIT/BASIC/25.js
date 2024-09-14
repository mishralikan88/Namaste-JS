// In a while loop, the condition is checked first, and then the statements are executed. 
// In a do-while loop, the statements are executed first, & then the condition is checked.
// A do-while loop guarantees that the statements will be executed at least once, even if the condition is false.

let i = 0

while (i <= 9) {
    console.log(i);
    i++;
}



let j = 10;

do {
    console.log(i);
    j++;
} while (j <= 9);

console.log("value of i is ", j);


// while loop Syntax -

// while (condition) {
//     stmts
//     increment(++)/decrement(--) -> optional
// }


// do while loop Syntax -

// do {
//     stmts
//     increment(++)/decrement(--) -> optional
// }
// while (condition)