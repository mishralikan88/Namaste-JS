// ==== Case 1 ====

// console.log("start")

// setTimeout(function cb() {
//     console.log("callback")
// }, 5000)

// console.log("End")

// 1M Line of Code

// callback function will wait for 1M line of code to be completed inside the callstack.

// Once the code execution inside callstack is empty, the callback is pushed inside callstack from the macroTask queue.


// ==== Case 2 ==== 

// console.log("start")

// setTimeout(function cb() {
//     console.log("callback")
// }, 0)

// console.log("End")


// ==== Case 3 ==== 

console.log("start")

setTimeout(function cb() {
    console.log("callback")
}, 5000)

console.log("end")

let startDate = new Date().getTime()
let endDate = startDate

// We're purposely creating a delay of 10 seconds and we're blocking the main thread. While loop runs for 10 seconds . 

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While expires")

// (startDate + 10000) is fixed in each iteration whereas (endDate) is variable in each iteration.

