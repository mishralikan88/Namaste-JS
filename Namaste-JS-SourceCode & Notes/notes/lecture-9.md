# Episode 9 : Block Scope & Shadowing in JS

What is a **Block**?

* Block aka *compound statement* is used to group JS statements together into 1 group. We group them within {...}.

Why do we need to group all these statements together?

* We need to group all these statements together so that we can use multiple statements in a place where JS expects one statement.
for example - JS expects one statement after if(condition).

**case 1**

if(true) console.log("JS expecting single stmt after if condition") 

**case 2**

if(true) {
    var x = 20
    console.log("JS expecting multiple stmts as a single compound statement after if condition")  
}


![Block Scope](../assets/blockScope.jpg "Block Scope")


    ```js
    {
        var a = 10;
        let b = 20;
        const c = 30;
        // Here let and const are hoisted in Block scope,
        // While, var is hoisted in Global scope.
    }
    ```

* Block Scope and its accessibility example
    ```js
    {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a); // 10
    console.log(b); // Uncaught ReferenceError: b is not defined
    ```
    * Reason?
        * Inside **block** scope, let and const are hoisted and set their value to <value not available> before they are initialised.Once they are initialised we can access them within the block.

        * While, a is stored inside a GLOBAL scope. 

        * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate memory space which is reserved for this block. Also, they can't be accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.

What is **Shadowing**?

* ```js
    var a = 100;
    {
        var a = 10; // same name as global var
        let b = 20;
        const c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30 
    }
    console.log(a); // 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself. 
    ```

* So, If one has same named variable outside the block, the variable inside the block *shadows* the outside variable. **This happens only for var**

* Let's observe the behaviour in case of let and const and understand it's reason.
    ```js
    let b = 100;
    {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(b); // 20
    }
    console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.
    ```
    ![Block Scope Explaination](../assets/scope.jpg "Lexical Scope")


* Same rule applies to **functions**
    ```js
    const c = 100;
    function x() {
        const c = 10;
        console.log(c); // 10
    }
    x();
    console.log(c); // 100
    ```

What is **Illegal Shadowing**?

* ```js
    let a = 20; // a value lies in script scope
    {
        var a = 30; // a value lies in global scope
    }
    console.log(a) // which a is accessed by JS .This is ambiguity for JS to understand. We get an error that a is already declared.You cannot shadow a like this .This is called illegal Shadowing.

    // Uncaught SyntaxError: Identifier 'a' has already been declared
    ```
    * We cannot shadow let with var. But it is **valid** to shadow a let using a let. However, we can shadow var with let.
    * All scope rules that work in function are same in arrow functions too.
    * Since var is function scoped, it is not a problem with the code below.
        ```js
        let a = 20;
        function x() {
            var a = 20; // function scoped.Valid Shadowing
        }
        ```

        ```js
        var a = 20;
        {
            let a = 30; // block scoped .Valid Shadowing
            console.log(a) // block scope a is accessed
        }
        // when JS debuggers checks below line, at that point block scope a variable is gone. It is garbage collected.
        console.log(a) // global scope.  a is accessible
        ```


**Note** - Each block has their own lexical scope and they follow scope chain pattern.

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=lW_erSjyMeM&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/lW_erSjyMeM/0.jpg" width="750"
alt="Block Scope & Shadowing in JS Youtube Link"/></a>