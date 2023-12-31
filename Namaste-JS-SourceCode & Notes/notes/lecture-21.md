# Episode 21 (Season 2 : Episode 2) : Promises

> Promises are used to handle async operations in JavaScript.

We will discuss with code example that how things used to work before `Promises` and then how it works after `Promises`

Suppose, taking an example of E-Commerce

```js
const cart = ["shoes", "pants", "kurta"];

// Below two functions are asynchronous and dependent on each other

const orderId = createOrder(cart);
proceedToPayment(orderId);


// In code below,it is the responsibility of createOrder function to  create the order first and call the callback function proceedToPayment later.But with this approach we have a problem called `Inversion of Control(discussed on previous chapter)`

createOrder(cart, function () {
  proceedToPayment(orderId);
});

```

Q: How to fix the above issue?  

Ans: By using Promise.

Now, we will make `createOrder` function returning a promise object and we will capture that `promise` into a `variable`.

Promise is nothing but a plain javascript object having properties such  as Prototype, PromiseState and PromiseResult . PromiseResult will hold data whatever this `createOrder` function will return. 

A typical promise object looks like: {Prototype:<Prototype>,PromiseState:<promiseState>,PromiseResult:<data>} where data is a variable factor and it depends on the promise data itself like when the data is available <data> is replaced by the actual data . Initially while making network calls <data> is undefined.

Since `createOrder` function is a async function, we don't know how much time will it take to finish execution.

So the moment `createOrder` API gets executed, it will return an `undefined` value. Let's say after 5 seconds, execution got finished and `orderId` value is available. Now this undefined value will be replaced by the actual data i.e. `orderId`.

In short, When `createOrder` got executed, it immediately returned a `promise object` with `undefined` value. Then javascript continued to execute next lines of code. After sometime when `createOrder` finished it's execution, `orderId` data was available and the earlier value undefined got replaced with actual orderId data.

Q: How  will we get to know `response` is ready?  

Ans: we useally attach a `callback` function to the `promise object` using `then` that  get triggered automatically when `result` is ready._

```js
const cart = ["shoes", "pants", "kurta"];

const promiseRef = createOrder(cart);
// promiseRef is a promise which has access to `then()`

// Initially promise data will be undefined, so function inside then() won't trigger.
// After a while, when execution has finished and when promiseRef gets the data then automatically the function inside then() gets triggered.

promiseRef.then(function () {
  proceedToPayment(orderId);
});
```

Q: How is it better than callback approach?

In Earlier solution we used to pass the function and then used to trust the function to execute the callback.

But with promise, we are attaching a callback function to a promiseObject.

There is difference between these words **passing a function** and **attaching a function**.

Promise guarantees that it will call the **then** attached callback function only once when the data is available. We call it as **Promise is fulfilled or resolved**. And if the data is not available then Promise will call the **catch** attached callback function and we call it as **promise is rejected**.

Earlier we talked about promise is an object with empty data but that's not entirely true, `Promise` is much more than that.

Now let's understand and see a real promise object.

fetch is a web-api which is utilized to make api call and it returns a promise.

We will be calling public github api (https://api.github.com/users/alok722) to fetch user data.



```js

const URL = "https://api.github.com/users/alok722";
const user = fetch(URL); // user is a promise object
console.log(user); // Promise {<Pending>}


/** OBSERVATIONS:
 * As we have discussed before  `promise` object has 3 properties.
 * `prototype`, `promiseState` & `promiseResult`
 * `promiseResult` is the same data which we talked earlier as the returned data from APIS & initially `promiseResult` is `undefined`
 * `promiseResult` will store data returned from API call
 * `promiseState` will tell in which state the promise is currently in, initially it will be in `pending` state and later it will become `fulfilled` or rejected depending on the data availability.
 */

/**
 * When above line is executed, `fetch` makes API call and return a `promise` instantly which is in `Pending` state and Javascript doesn't wait to get it `fulfilled`
 * And in next line it consoles out the `pending promise`.
 * NOTE: chrome browser has some in-consistency, the moment console happens it shows in pending state but if you will expand that it will show fulfilled because chrome updated the log when promise get fulfilled.
 * Once fulfilled, data is available in promiseResult and this data is not directly accessible to the external world .This data is in ReadableStream format and there is a way to extract it.
 */
```

Now we can attach callback to above response?

Using `.then`

```js
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL); // you cant edit this user data as promise is immutable 

user.then(function (data) {
  console.log(data);
});

// And this is how Promise is used.It guarantees that it could be resolved only once, either it could be `success` or `failure`
/**
 *Promise State-

    A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

 */
```

💡Promise Objects are immutable.  
-> Once promise is fulfilled, we get the data. We don't have to worry that someone can mutate/change that data because by nature promise  is immutable.

Mutable - we can modify an existing object.
Immutable - If we try to modify an object, a new object will be created. The original object will not be changed.

 So over above we can't directly mutate `user` promise object.

### Interview Guide

💡What is Promise?  
-> Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

-> A container for a future value.

-> **A Promise is an object representing the eventual completion or failure of an asynchronous operation.**

We are now done solving one issue of callback i.e. Inversion of Control

But there is one more issue, callback hell...

```js
// Callback Hell Example
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
// And now above code is expanding horizontally and this is called pyramid of doom.
// Callback hell is ugly and hard to maintain.

// 💡 Promise fixes this issue too using `Promise Chaining`
// Example Below is a Promise Chaining

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    updateWalletBalance(balance);
  });

// ⚠️ Common PitFall - We forget to return promise in Promise Chaining.

// The idea is promise data returned can be used in the next promise object in the promise chain and so on .We are passing the promise data down to the promise chain and we need return keyword for that to happen.

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

// To improve readability you can use arrow function instead of regular function
```

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=ap-6PPAuK1Y&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=3&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/ap-6PPAuK1Y/0.jpg" width="750"
alt="promise in Javascript Youtube Link"/></a>








**Promise chain**


const promiseObject = createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

**splitting promise chain into indivisual promises**

promise 1 
const createOrderPromise = createOrder(cart) // we get the order ID after the order is created 


promise 2 
const proceedToPaymentPromise = createOrderPromise.then(
  function (orderId) {
    return proceedToPayment(orderId);
  }) // we passed the object ID from the promise object into proceedToPayment() which will return another promise

promise 3 
const ShowOrderSummaryPromise = proceedToPaymentPromise.then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  }) // The process continues

promise 4 
const UpdateWalletBanalcePromise = ShowOrderSummaryPromise.then(function (balance) {
    return updateWalletBalance(balance);
  }); // The process continues


  
  
  

