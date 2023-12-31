# Chapter 20 : Callback

- There are 2 Parts of Callback:

  1. Good Part of callback - Callbacks are super important while writing asynchronous code in JS
  2. Bad Part of Callback - callbacks inside callback leads to issues like - 
     - Callback Hell
     - Inversion of control

- Understanding Bad part of callback is super important to learn Promise in next chapter.

> 💡 JavaScript is synchronous, single threaded language. It can Just do one thing at a time . JS Engine has just one call-stack where it  executes code line by line, it does not wait.

```js
console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2

// 💡 It is quickly printing because `Time, tide & Javascript waits for none.`
```

But what if we have to delay code execution of any line. We could utilize callback.

```js
console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.
```

**CALLBACK HELL**
-----------------

### 🛒 e-Commerce web app situation

Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta in cart and now he is placing order. So in backend the situation could look something like this.

```js
const cart = ["shoes", "pants", "kurta"];
// Two steps to place an order
// 1. Create a Order
// 2. Proceed to Payment

// It could look something like this:
api.createOrder();
api.proceedToPayment();
```

Assumption, once order is created then only we can proceed to payment, so there is a dependency. So How to manage this dependency.
Callback can come to the rescue, How?

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});
// 💡 Over here `createOrder` api is first creating a order then it is responsible to call `api.proceedToPayment()` as part of callback approach.
```

To make it a bit complicated, what if after the payment, you have to show Order summary by calling `api.showOrderSummary()` and now it has dependency on `api.proceedToPayment()`

Now my code should look something like this:

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});
```

Now what if we have to update the wallet, now this will have a dependency over `showOrderSummary`

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
// 💡 Callback Hell - callbacks inside callback creates a call back hell structure.
```

When we have a large codebase having numbers of APIs with internal dependancies to each other, then we fall into callback hell where the code will grow horizontally and it is very difficult to read and maintain.This callback hell structure is also known as **Pyramid        of Doom**.

Till this point we are comfortable with concept of callback hell but now lets discuss about `Inversion of Control`. It is very important to understand in order to get comfortable around the concept of promise.


**INVERSION OF CONTROL**
------------------------
> 💡 Inversion of control is like, you lose the control of code when we are using callbacks.

Let's understand with the help of example code and comments:

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 So over here, we are creating an order and then we are blindly trusting `createOrder`API to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or it never runs at all.

// 💡 In next chapter, we will see how we can fix such problems.
```

> 💡 Async programming in JavaScript exists because callback exits.

more at `http://callbackhell.com/`

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=yEKtJGha3yM&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX" target="_blank"><img src="https://img.youtube.com/vi/yEKtJGha3yM/0.jpg" width="750"
alt="callback Youtube Link"/></a>
