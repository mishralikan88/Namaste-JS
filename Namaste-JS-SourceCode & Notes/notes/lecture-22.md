# Chapter 22 : Creating a Promise, Chaining & Error Handling


```js

promise - consumer part - How a promise is consumed.
====================================================

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId
// ❓ What will be printed in below line?
// It prints Promise {<pending>}, but why?
// Because above createOrder is going to take sometime to get resolved, so pending state. But once the promise is resolved,promise attached `.then` calls the callback to get executed.
console.log(promise);

promise.then(function (orderId) {
     proceedToPayment(orderId);
})
 

// Now we will see, how createOrder is implemented so that it is returning a promise.In short we will see, "How we can create Promise" and then return it.

promise - producer part - how a promise is produced/created.
===========================================================

function createOrder(cart) {
  // JS provides a Promise constructor through which we can create promise.
  // It accepts a callback function with two parameter `resolve` & `reject.
  const promise = new Promise(function (resolve, reject) {
    // What is this `resolve` and `reject`?
    // These are function which are passed by javascript to us in order to handle success and failure of function call.
    // Now we will write logic to `createOrder`
    /** pseudocode
     * 1. validateCart
     * 2. Insert in DB and get an orderId
     */
    // We are assuming in real world scenario, validateCart would be defined
    if (!validateCart(cart)) {
      // If cart is not valid, reject the promise
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345"; // We got this id by calling to db (Assumption)
    if (orderId) {
      // If cart is valid, resolve the promise
      resolve(orderId);
    }
  });
  return promise;
}

function validateCart(cart){
  return true // cart is validated
}


```

In code above, if the cart is validated successfully, the promise will be resolved (success case),

Now let's see if there was some error and we are rejecting the promise, how we could catch that?  
-> Using `.catch`

```js
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

// Here we are consuming Promise and will try to catch promise error
promise
  .then(function (orderId) {
    // ✅ success- promise resolved case
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    // ⚠️ failure - promise reject case 
    console.log(err);
  });

// Here we are creating Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // Assume below `validateCart` return false then the promise will be rejected
    // And then our browser is going to throw the error.
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}
```

Now, Let's understand the concept of Promise Chaining  
 
-> In promise chaining, whatever is returned from the first promise becomes data for the next promise and so on .
-> At any point of promise chaining, if one of the promise is rejected, the execution will fallback to `.catch` provided there is only one `catch` exist at the end of promise chain.When this happens, others promise in the promise chain won't run.

```js

Example-

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
  // ✅ success - promise is resolved
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
  // ✅ success - promise is resolved
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
  // ✅ success - promise is resolved
    console.log(paymentInfo);
  })
  // Handling promise error.Below code will be executed in case either one of the above promises is rejected.But in our case intentionally we are resolving all the promises.Thus below code will not be executed.
  .catch(function (err) {
    console.log(err);
  });


function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // If `validateCart` returns false then the promise will be rejected and then our browser will throw the error if it is not handled properly. For now assume validateCart returns true
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment(cart) {
  return new Promise(function (resolve, reject) {
    // For the time being, we are simply `resolving` this  promise
    resolve("Payment Successful");
  });
}
```


Q: What if we want to continue execution even if any of the promise is failing, how to achieve this?  

-> By placing the `.catch` block next to the promise which has a chance of failure.

-> once `.catch` handles the promise JS will keep executing the next promise in the promise chain.

-> There could be multiple `.catch` block in a promise chain.


Eg:

```js
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;  // ⚠️ lets say the promise is rejected here.
  })
    .catch(function (err) {
    // This catch block is only responsible for  handling errors in  above promise or promises along the chain.In our case we have one promise and we encountered error and our catch block here is handling that error.

    console.log(err);
  });
  .then(function (orderId) {
    console.log('This block is definitely executed')
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  }) 
  
  .catch(function (err) { // generic catch block for promise error handling
    console.log(err);
  });
```

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=U74BJcr8NeQ&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=4&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/U74BJcr8NeQ/0.jpg" width="750"
alt="promise in Javascript Youtube Link"/></a>


Note-

We can only resolve a promise once . not more than that. 