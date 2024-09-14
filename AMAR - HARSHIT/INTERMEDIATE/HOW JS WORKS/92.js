


// 1 . Compilation 
// 2. Code execution 


// 1.compilation------------




// we could have taken first line and execute . then second line and then execute .
// why compile ? 
// compilation phase - (1.Tokenising , Lexing and parsing ,code generation)

// How compiler works that not our movitive . My motive is how js works?

// compiler terory
// Tokenising - we break the code nto small tokens or chunks . The process is called tokenising
// parsing - generates AST bt kaeimng those tokens.
//  code execusing - ask chat gpt

//  why compilation ? As [er the echamascrip;t standard (documenattion )-
// 1. Early error checking
// 2.  determinig appropiate scope for variabls  efore executing the code 

// conslusion -

// bfore we execute single line of code our code compiles.


//1. Early error checking -

// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = ."Amar" // error - unexpected token '.'

// why we gotr  this error ? because our code was parsed already.Thats why we cought this error.

// 2.  determinig appropiate scope for variabls  efore executing the code -

// bfore we execute single line of code , during parsing ,js determines scope of a variable . scope (acccesibility of variable in the current context)


// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = "Amar" // js checks the scope of firstName.and finds firsNamescope in global scope .

// global scope and function scope -ask chat gpt with examples 


// 2. Code execution - in js code exceutes inside execution context 

console.log(this)
console.log(window)
console.log(firstName)
var firstName = "Amar" 

// global execution context - ask chat gpt . what is it in this context 

// creation phase /memopry creation phase -
// firstName -> undefined
// this -> window object
// window -> window object
// explain



// code execution phase / thread of execution
// explain
// js is synchronous programming langauge . executes code line by line . explian why single thread synchronous programming  Language.

// output - window , window , undefined (hositing - explain this )

console.log(this)
console.log(window)
console.log(firstName)
var firstName = "Amar" 
console.log(firstName)

// output - window , window , undefined ,Amar


