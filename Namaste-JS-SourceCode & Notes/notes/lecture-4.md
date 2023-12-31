# Episode 4 : Functions and Variable Environments

```js
var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x); // 3

function a() {
  var x = 10; // localscope because of separate execution context
  console.log(x); // 1
}

function b() {
  var x = 100;
  console.log(x); // 2
}
```

Outputs:

> 10

> 100

> 1

## Code Flow in terms of Execution Context

* The Global Execution Context (GEC) is created and pushed into the Call Stack.

> Call Stack : GEC

* In phase 1 of GEC , variable x is initialised with undefined and a and b are initialised with their function definations.In phase 2 of GEC,x is initialised with 1 and in subscequent lines a and b functions are invoked.As soon as JS encounters function invocations inside GEC , It creates a local or function execution Context for each of the function invocations or function calls.At present function a's execution context is created and pushed into the call stack.

> Call Stack: [GEC, a()]

* In phase 1 of a's local EC, a totally different variable x is initialised with undefined and in phase 2 it is assigned with 10 and printed in the console. After printing, no more commands to run, so function a's local EC is removed from both GEC and from Call stack.

> Call Stack: GEC

* In the next line, When JS encounters b function invocation, b's execution context is created. Same steps for b's Execution Context.

> Call Stack :[GEC, b()] 

* when b's code execution phase is finished, There is no longer code exist for b to get executed and the local execution context for b is removed from the call stack.At this moment both functions execution contexts are removed from the stack.

> Call Stack: GEC

* In the next line JS encounters **console log (x)** which will print the value of x from the GEC into the console.JS cannot encounter further code after the current line execution,Thus GEC is removed from the call stack and JS program ends.

> Call Stack: 

* reference:

![Execution Context Phase 1](../assets/function.jpg "Execution Context")

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=gSDncyuGw0s&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/gSDncyuGw0s/0.jpg" width="750"
alt="Functions and Variable Environments Youtube Link"/></a>