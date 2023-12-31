# Episode 8 : let & const in JS, Temporal Dead Zone

* **let and const** declarations are hoisted. But its different from **var** declaration.

    ```js
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    console.log(b); // prints undefined as expected because of 'var' hoisting

    let a = 10;
    var b = 15;
    
    console.log(a); // 10   
    console.log(window.a); // undefined
    console.log(window.b); // 15
    ```
  It looks like let isn't hoisted, **but it is**, let's understand
  * In the above example, var b is hoisted in global scope with a value *undefined* whereas let a is hoisted in a separate memory object or 'Script' scope with a value <value unavailable>. Within this scope, value of 'a' wont be available until it is initialised. So the time between **let variable 'a' is hoisted** and **'a' is initialised** is called Temporal Dead Zone. If we try to get access to let variable 'a' within this time frame we get a reference error.Same rule applies to const variable as well.

![Hoisting in Let and Const variables](../assets/letHoisting.jpg "Let and const Hoisting")

<br>

* **Temporal Dead Zone** : Time since when the let variable was hoisted until it is initialized.
    - So any line till before "let a = 10" is the TDZ for 'a'
    - Since a is not accessible on global, its not accessible in *window/this* also. window.b or this.b -> 15; But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared anywhere)

* **Reference Error** are thrown when variables are in temporal dead zone.

* **Syntax Error** doesn't even let us run single line of code.

    * ```js
        let a = 10;
        let a = 100;  //this code is rejected upfront as SyntaxError. (duplicate declaration)
        ------------------
        let a = 10;
        var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)
        ```

* **Let** is a stricter version of **var**. Now, **const** is even more stricter than **let**.
    ```js
    let a;
    a = 10;
    console.log(a) // 10. Note declaration and assigning of a is in different lines.
    ------------------
    const b;
    b = 10;
    console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)
    ------------------
    const b = 100;
    b = 1000; //this gives us TypeError: Assignment to constant variable. 
    ```

* Types of **Error**: Syntax, Reference, and Type.

    * Uncaught ReferenceError: x is not defined at ...
        * This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.

    * Uncaught ReferenceError: cannot access 'a' before initialization
        * This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.

    * Uncaught SyntaxError: Identifier 'a' has already been declared
        * This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.

    * Uncaught SyntaxError: Missing initializer in const declaration
        * This Error signifies that we haven't initialized or assigned value to a const declaration.

    * Uncaught TypeError: Assignment to constant variable
        * This Error signifies that we are reassigning to a const variable.

### SOME GOOD PRACTICES:

* Try using const wherever possible.
* If not, use let, Avoid var.
* Declare and initialize all variables with let to the top to avoid errors to shrink temporal dead zone window to zero.

**Note**
If a variable is not present in the window object and if we try to get access to the variable through window.VarName Then we get undefined as output.

**Are let and const variables are hoisted ?**
Like var declarations, let and const declarations are also hoisted.It looks like it is not hoisted but internally it is hoisted.Only difference is var declarations are hoisted in global scope but let and const declarations are hoisted in script scope which is a temporary javascript object scope.

In var declaration we can access the variable before the variable is initialised but in let and const declaration we can't access the variable before it is initialised because from the time when let or const variables are declared till they are initialised is called Temporal Dead zone and We cant access let and const variables with in the Temporal Dead Zone.

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=BNC6slYCj50&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/BNC6slYCj50/0.jpg" width="750"
alt="let & const in JS, Temporal Dead Zone Youtube Link"/></a>