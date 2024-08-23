// function Outer(){
//     var a = 10
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }
// Outer()() //10 



// function Outer(){
//     function inner(){
//         console.log(a)
//     }
//     var a = 10
//     return inner
// }
// Outer()() //10 


// function Outer(){
//     let a = 10
//     function inner(){
//         console.log(a)
//     }

//     return inner
// }
// Outer()() //10 


// function Outer(str){
//     let a = 10
//     function inner(){
//         console.log(a,str)
//     }

//     return inner
// }
// Outer("Hello There")() //10 


// function outest() {
//     var c = 20
//     function outer(str) {
//         let a = 10
//         function inner() {
//             console.log(a, c, str)
//         }
//         return inner
//     }
//     return outer
// }
// outest()("Hello")()



// function outest() {
//     var c = 20
//     function outer(str) {
//         let a = 10
//         function inner() {
//             console.log(a, c, str)
//         }
//         return inner
//     }
//     return outer
// }
// let a = 100 // script scope
// outest()("Hello")()


// Understand the usecases of below concepts.

// Module Design pattern 
// Currying
// Memoize
// Data hiding & encapsulation
// setTimeouts


// Data Hiding - 

// var count = 0
// function increment(){
//     count++
//     console.log(count)
// }
// increment()
// increment()
// increment()
// count = 101 // count is accesible here. Anyone can modify this count variable
// increment()
// increment()


// Achieving data hiding using closure 

// function Counter(){
//     var count = 0
//     function increment(){
//         count++
//         console.log(count)
//     }
//     return increment
// }
// var counter=Counter()
// counter()
// counter()
// counter()
// console.log("=======")
// var counter1 = Counter()
// counter1()
// counter1()

// We can't access count variable outside the function Counter. Hence privacy is not compromised. 
// count variable is hidden now.count variable is private now.

// Achieving data hiding using closure - using constructor function

function Counter() {
    var count = 0;

    // function increment(){
    //     count++
    //     console.log(count)
    // }

    // constructor functions

    this.IncrementCounter = function () { // this points to the current instance.
        count++
        console.log(count)
    }
    this.DecrementCounter = function () {
        count--
        console.log(count)
    }
}

// Now, Counter will act as a class.So to access constructor function within the class we gotta create objects.

var counter1 = new Counter() // counter1 is object of class Counter
counter1.IncrementCounter()
counter1.IncrementCounter()
counter1.DecrementCounter()
counter1.IncrementCounter()
counter1.IncrementCounter()
counter1.DecrementCounter()
console.log("=======")
var counter2 = new Counter() 
counter2.IncrementCounter()
counter2.IncrementCounter()