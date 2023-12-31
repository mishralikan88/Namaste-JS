# Episode 7 : The Scope Chain, Scope & Lexical Environment

* **Scope** in Javascript is directly related to **Lexical Environment**.Scope refers to the current context of the code , which determines the accessibility of variables.

* Let's observe the below examples:
```js
// CASE 1
function a() {
    console.log(b); // 10
    // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope. 
}
var b = 10;
a();

// In this case JS first tried to find b inside the local scope or function scope/a function scope and did not find b, Then It tried to find b in it's parent scope / global scope and found it.
```

```js
// CASE 2
function a() {
    c();
    function c() {
        console.log(b); // 10
    }
}
var b = 10;
a();

// In this case JS first tried to find b inside the local scope or function scope/c function scope and did not find b,Then it tried to find b in it's parent scope which is 'a function scope' and found it. 
```

```js
// CASE 3
function a() {
    c();
    function c() {
        var b = 100;
        console.log(b); // 100
    }
}
var b = 10;
a();

// In this case JS first tried to find b inside the local scope or function scope/c function scope and found it.
```

```js
// CASE 4
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // 10
    }
}
a();
console.log(b); // Error, Not Defined
```

* Let's try to understand the output in each of the cases above.
  * In **case 1**: function a is able to access variable b from Global scope.
  * In **case 2**: 10 is printed. It means that within nested function too, the global scope variable can be accessed.
  * In **case 3**: 100 is printed meaning local variable of the same name took precedence over a global variable.
  * In **case 4**: A function can access a global variable, but the global execution context can't access any local variable.
    ```
    To summarize the above points in terms of execution context:
    call_stack = [GEC, a(), c()]
    Now lets also assign the memory sections of each execution context in call_stack.
    c() = [[lexical environment pointer pointing to a()]]
    a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]
    GEC =  [a:{},[lexical_environment pointer pointing to null]]
    ```
    ![Lexical Scope Explaination](../assets/lexical.jpg "Lexical Scope")
   

<br>

* Scope = Environment

* **Lexical Environment** = Local memory + Lexical Environment of its parent or Surrounding Environment

* **Lexical Scope**: The ability of a function to access variables from the parent Scope.

* Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in the local Execution Context(in memory space).
 ![Lexical Scope Explaination](../assets/lexical.jpg "Lexical Scope")
 orange mark is nothing but the reference pointing to lexical Environment of it's parent.

* **Scope Chain** is the chain of lexical environments.That means If JS cannot find a variable in a current scope then it will check the same variable in its parent scope or Lexical scope.If the variable is not present either in the parent scope , It will check the same variable in parent's parent scope and this search will continue till global scope.The way of finding the variables across the lexical scopes form a Scope Chain.

 ![Lexical Scope Explaination](../assets/lexical2.jpg "Lexical Scope")
 In the above figure, inside scope section **local -> closure -> global** forms a **Scope Chain** and in this chain JS is trying to find out the value of variable b and it finds it in the closure (function a's scope)

* ```js
  function a() {
      function c() {
          // logic here
      }
      c(); // c is lexically inside a
  } // a is lexically inside global execution
  ```

* Lexical or Static scope refers to the accessibility of variables, functions and object based on physical location in source code.
    ```js
    Global {
        Outer {
            Inner
        }
    }
    // Inner is surrounded by lexical scope of Outer
    ```


* **TLDR**; An inner function can access variables which are in outer functions even if inner function is nested deep. In any other case, a function can't access variables not in its scope.


<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=uH-tVP8MUs8&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/uH-tVP8MUs8/0.jpg" width="750"
alt="The Scope Chain, Scope & Lexical Environment Youtube Link"/></a>