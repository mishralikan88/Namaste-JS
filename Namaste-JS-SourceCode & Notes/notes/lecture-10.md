# Episode 10 : Closures  in JS

* Function bundled along with it's lexical scope is **closure**.


![Closure](../assets/closureExample.jpg "Closure Example")

In the above Image, function y along with its lexical environment i.e. function x's environment forms a closure.


![Closure](../assets/closureExample1.0.jpg "Closure Example")

when we are inside line number 3 we are inside local scope of function x . we have access to x's local variables and global variables.

![Closure](../assets/closureExample1.1.jpg "Closure Example")

when we are inside line number 7 we are inside local scope of function y . we have access to y's local variables and It forms a closure with x function meaning we can also access the variables of x function and global object.

![Closure](../assets/closureExample1.2.jpg "Closure Example")

when we are inside line number 16 we are inside local scope of function z . we have access to z's local variables and It forms a closure with x function and y function, meaning we can also access the variables of x function and y function and global object.

* JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent and so on upto the global scope.

    ```js
    function x() {
        var a = 7;
        function y() {
            console.log(a);
        }
        return y;
    }
    var z = x();
    console.log(z);  // value of z is entire code of function y which is function y() {console.log(a); }

    z() // It will print 7 on the console , but where 'a = 7' is coming from .At this point Its gone from the local scope ,Its not even there in global scope. It will come from the closure.(closure is also a temporary memory space with some values in it which later garbage collected when unused) 
    ```
    * In above code, outer function x returns the inner function y and once after that it gets removed from the call stack. Behind the scene not only the y function is returned but also the entire closure (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a inside x().
    ```



```js
    function x() {
        var a = 7;
        function y() {
            console.log(a);
        }
        var a = 100;
        return y;
    }
    var z = x(); // returns y with its lexical scope.In its lexical scope the value of a is not returned the reference of a is returned.
    // At first a was 7 then it modified to 100 in its execution context.
    z() // 100 
```

* Another Example

```js
    function z() {
        var b = 900;
        function x() {
            var a=7;
            function y(){
                console.log(a,b);
            }
            y();
        }
        x();
    }
    z();    // 7 900
```

* Thus In simple words, we can say:
    * ***A closure is a function** that has access to its outer function scope even after the function has returned. Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned.*


<br>

* ![Closure Explaination](../assets/closure.jpg "Lexical Scope")

* Advantages of Closure:
  * Module Design Pattern
  * Currying
  * Memoize
  * Data hiding and encapsulation
  * setTimeouts etc.

* Disadvantages of Closure:
  * Over consumption of memory
  * Memory Leak
  * Freeze browser


<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=qikxEIxsXco&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/qikxEIxsXco/0.jpg" width="750"
alt="Closure in JS Youtube Link"/></a>

