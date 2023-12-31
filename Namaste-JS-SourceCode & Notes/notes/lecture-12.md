# Episode 12 : Famous Interview Questions ft. Closures

### Q1: What is Closure in Javascript?
**Ans**: A function along with reference to its outer environment together forms a closure. Or in other words, A Closure is a combination of a function and its lexical scope bundled together.
eg:
```js
function outer() {
    var a = 10; // local scope to function
    function inner() {
        console.log(a);
    } // inner forms a closure with outer
    return inner;
}
outer()(); // 10 // over here first `()` will return inner function and then using secong `()` to call inner function 
```

### Q2: Will the below code still forms a closure?
```js
function outer() {
    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}
outer()(); // 10
```
**Ans**: Yes, because inner function forms a closure with its outer environment so sequence doesn't matter.

### Q3: Changing var to let, will it make any difference?
```js
function outer() {
    let a = 10; // local scope to function
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()(); // 10
```
**Ans**: It will still behave the same way.

### Q4: Will inner function have the access to outer function argument?
```js
function outer(str) {
    let a = 10;
    function inner() {
        console.log(a, str);
    }
    return inner;
}
outer("Hello There")(); // 10 "Hello There"
```
**Ans**: Inner function will now form closure and will have access to both a and str.

### Q5: In below code, will inner function form closure with **outest**?
```js
function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
outest()("Hello There")(); // 10 20 "Hello There"
```
**Ans**: Yes, inner will have access to all its outer environment.

### Q6: Output of below code and explaination?
```js
function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
let a = 100;
outest()("Hello There")(); // 10 20 "Hello There"
```
**Ans**: Still the same output, the inner function will have reference to inner a, so conflicting name won't matter here. If it wouldn't have find a inside outer function then it would have went more outer to find a and thus would have printed 100. So, it tries to resolve variable in scope chain and if a wouldn't have been found it would have given reference error.

### Q7: Advantage of Closure?
  * Module Design Pattern
  * Currying
  * Memoize
  * Data hiding and encapsulation
  * setTimeouts etc.

### Q8: Discuss more on Data hiding and encapsulation?
```js
// without closures
var count = 0;
function increment(){
  count++;
}
// in the above code, anyone can access count and change it. 

------------------------------------------------------------------

// (with closures) -> put everything into a function
function counter() {
  var count = 0;
  function increment(){
    count++;
  }
}
console.log(count); // this will give referenceError as count can't be accessed outside of the counter function scope. This way we achieve data hiding. We are hiding count data to the outside world.

------------------------------------------------------------------

//(increment with function using closure) true function
function counter() {
  var count = 0;
  return function increment(){
    count++;
    console.log(count);
  }
}
var counter1 = counter(); //counter function has closure with count var. 
counter1(); // increments counter

var counter2 = counter();
counter2(); // here counter2 is whole new copy of counter function and it wont impack the output of counter1

*************************

// Above code is not good and scalable for say, when you plan to implement decrement counter at a later stage. To address this issue, we use *constructors*

// Adding decrement counter and refactoring code:

function Counter() {
//constructor function. Good coding would be to capitalize first letter of constructor function. 
  var count = 0;
  this.IncrementCounter = function() { // Anonymous function
    count++;
    console.log(count);
  }
   this.DecrementCounter = function() {
    count--;
    console.log(count);
  }
}

var counter1 = new Counter();  // creating counter1 object to get an access to the constructor fun.
counter1.IncrementCounter();
counter1.IncrementCounter();
counter1.DecrementCounter();
// returns 1 2 1
```

### Q9: Disadvantage of closure?
**Ans**: Overconsumption of memory when using closure as closures consume some memory space to accumulate  data inside of it. These data are not garbage collected until the program expires.So when creating many closures, more memory is accumulated and this can create memory leaks if not handled properly.

**Garbage collector** : Program in JS engine or browser that frees up unused memory. In highlevel languages like C++ or JAVA, garbage collection is left to the programmer, but in JS engine its done implicitly.

```js
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  }
}
 
var y = a(); // y is a copy of b()
y(); 
 
 // Once a() is called, its element x should be garbage collected ideally. But fun b has closure over var x. So mem of x cannot be freed. Like this if more closures formed, it becomes an issue. To tackle this, JS engines like v8 and Chrome have smart garbage collection mechanisms. Say we have var x = 0, z = 10 in above code. When console log happens, x is printed as 0 but z is removed automatically because z is unused.

 // Javascript engine calls garbage collector (GC) to free unused memory when they are no longer be used . GC internally uses mark and sweep algorithm.
```


<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=t1nFAMws5FI&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/t1nFAMws5FI/0.jpg" width="750"
alt="Closures Interview Question in JS Youtube Link"/></a>

// IIFE - Search Online
// Mark and Sweep Algorithm - Search Online 
