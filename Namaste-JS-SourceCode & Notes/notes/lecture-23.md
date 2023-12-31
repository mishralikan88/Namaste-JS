# Chapter 23 (Season 2 : Episode 4) : async await

###
Topics Covered
- What is async?
- What is await?
- How async await works behind the scenes?
- Example of using async/await
- Error Handling
- Interviews
- Async await vs Promise.then/.catch

Q: What is async? 

A: Async is a keyword that is used before a function to create a async function.

Q: What is Async function and how it is different from Normal function?  

💡 Async function always returns a promise, even if I return a simple string from async function, async keyword will wrap it under Promise object and then returns whereas Normal functions return anything depending on what the context is . It evens returns a promise out of it.

Async function returning a Non-promise value
=============================================
```js
async function getData() {
  return "Namaste JavaScript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}

//❓How to extract data from above promise? One way is using promise.then()
dataPromise.then(res => console.log(res)); // Namaste JavaScript
```
Async function returning a promise
==================================
```js
const p = new Promise((resolve, reject) => {
  resolve('Promise resolved value!!');
})

async function getData() {
  return p;
}
// In above case, since we are already returning a promise async function would simply return that instead of wrapping with a new Promise.

const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Promise resolved value!!'}
dataPromise.then(res => console.log(res)); // Promise resolved value!!
```

Q: How we can use `await` along with async function?  

A: `async` and `await` combo is used to handle promises.

Q: How we used to handle promises earlier and why do we even need async/await?

```js
Handling Promise before async and await were introduced.
========================================================
const p = new Promise((resolve, reject) => {
  resolve('Promise resolved value!!');
})

function getData() {
  p.then(res => console.log(res));
}

getData(); // Promise resolved value!!

//📌 Till now we have been using Promise.then/.catch to handle promise.
// Now let's see how async await can help us and how it is different
// The rule is we have to use keyword await in front of promise.


Handling Promise after async and await are introduced.
=======================================================
const p = new Promise((resolve, reject) => {
  resolve('Promise resolved value!!');
})

async function getData() {
  const val = await p;
  console.log(val);
}
getData(); // Promise resolved value!!
```
📌 `await` is a keyword that can only be used inside a `async` function.
```js
await function() {} // Syntax error: await is only valid under async function.
```


Q: What makes `async`-`await` special?  

A: Let's understand with one example where we will compare async-await way of resolving promise with older .then/.catch fashion. For that we will modify our promise `p` with some delay factor added.
```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value!!');
  }, 3000);
})

// 📌 Handling  Promise using then and catch

function getData() {
  // JS engine will not wait for promise to be resolved
  p.then(res => console.log(res));
  console.log('Hello There!');
}
getData(); 

// Output :
// Hello There!
// Promise resolved value!!

// Code Explanation:

// As we know Javascript waits for none, so JS engine will register this promise callback in a separate space and attaches a Timer of 3 sec to it and then it moves to the next line and prints 'Hello There' in the console.Once 3 sec is elapsed promise data is avaiable , After that then() is invoked which in turns logs the promise response in the console.


// 📌 Handling  Promise using async and await

async function handlePromise() {
  // JS Engine will wait the for promise to be resolved 
  const val = await p;
  console.log('Hello There!');
  console.log(val);
}
handlePromise(); // This time `Hello There!` won't be printed immediately instead after 3 secs `Hello There!` will be printed followed by 'Promise resolved value!!'
// 💡 So basically code was waiting at `await` line to get the promise resolve before moving on to next line.

// Above is the major difference between Promise.then/.catch vs async-await


//🤓 Let's brainstorm more around async-await
async function handlePromise() {
  console.log('Hi');
  const val = await p;
  console.log('Hello There!');
  console.log(val);

  const val2 = await p;
  console.log('Hello There! 2');
  console.log(val2);
}
handlePromise(); 
// In above code example, will our program wait for 2 time or will it execute parallely.
//📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value!!') will get printed immediately.

// Let's create one promise and then resolve two different promise.
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value by p2!!');
  }, 2000);
})

async function handlePromise() {
  console.log('Hi');
  const val = await p;
  console.log('Hello There!');
  console.log(val);

  const val2 = await p2;
  console.log('Hello There! 2');
  console.log(val2);
}
handlePromise(); 
// 📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value by p2!!') will get printed immediately. So even though `p2` was resolved after 2 secs it had to wait for `p` to get resolved


// Now let's reverse the order execution of promise and observe response.
async function handlePromise() {
  console.log('Hi');
  const val = await p2;
  console.log('Hello There!');
  console.log(val);

  const val2 = await p;
  console.log('Hello There! 2');
  console.log(val2);
}
handlePromise(); 
// 📌 `Hi` printed instantly -> now code will wait for 2 secs -> After 2 secs ('Hello There!' 'Promise resolved value by p2!!') will get printed and in the subsequent second i.e. after 3 secs ('Hello There! 2' 'Promise resolved value!!') will get printed
```

Q: Question is Is program actually waiting or what is happening behind the scene?  

A: As we know, Time, Tide and JS wait for none. And it's true. Over here it appears that JS engine is waiting but JS engine is not waiting over here. It has not occupied the call stack if that would have been the case our page may have got frozen. So JS engine is not waiting. So if it is not waiting then what it is doing behind the scene? Let's understand with below code snippet.
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value by p1!!');
  }, 5000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value by p2!!');
  }, 10000);
})

async function handlePromise() {
  console.log('Hi');
  debugger;
  const val = await p;
  console.log('Hello There!');
  debugger;
  console.log(val);

  const val2 = await p2;
  console.log('Hello There! 2');
  debugger;
  console.log(val2);
}
handlePromise(); 
// When this function is executed, it will go line by line as JS is synchronous single threaded language. Lets observe what is happening under call-stack. Above you can see we have set the break-points.

// Code Flow :

// handlePromise() is pushed and  It will log `Hi` to console first 
// In the next line as soon as js Engine  sees the await keyword, where promise is suppose to be resolved , will it wait for promise to resolve and block call stack? No it does not but it suspends the excution of  handlePromise() till the promise is resolved and moved out of call stack . 
// when `p` gets resolved after 5 secs , handlePromise() will be pushed to call-stack.But this time JS Engine will start executing code from where it was left off.Now it will log 'Hello There!' and 'Promise resolved value!!' ->

// In the next line it will check whether `p2` is resolved or not .but P2 will take 10 secs to be resolved.The point js engine reaches to this line 5 section had already elasped so it will take 5 more seconds to resolve promise for P2.same process will repeat.execution will be suspended until promise is resolved.

// 📌 The important point is JS is not waiting, call stack is not getting blocked.But it appears to be waiting . (Imaginative)

// Moreover in above scenario what if p1 would be taking 10 secs and p2 5 secs -> even though p2 got resolved earlier but JS is synchronous single threaded language so it will first wait for p1 to be resolved ,once p1 is resolved it prints Hello There and  promise p1 object value and then  immediately execute p2 along with the subsequent lines of code.
```

### Real World example of async/await

```js
async function handlePromise() {
  // How fetch works ? fetch(https://api.github.com/users/alok722) returns a Response Object  as body as Readable stream and this is also a promise and we are waiting for this promise to get resolved.Thats why the await keyword is used before the promise object.
  const data = await fetch('https://api.github.com/users/alok722'); 
  // Response or data.json() returns a promise with promise data in json format but again the return value is also a promise which is why the second await keyword is used before the promise object to get it resolved.
  const res = await data.json();
  console.log(res);
};
handlePromise()
```

### Error Handling

While we were using normal Promise we were using .catch to handle error, now in `async-await` we would be using `try-catch` block to handle error.

```js
async function handlePromise() {
  try {
    const data = await fetch('https://api.github.com/users/alok722');
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err)
  }
};
handlePromise()

// In above whenever any error will occur the execution will move to catch block. One could try above with bad url which will result in error.

// Other way of handling error:
handlePromise().catch(err => console.log(err)); // this will work as handlePromise will return error promise in case of failure.
```

### Async await vs Promise.then/.catch
What one should use? `async-await` is just a syntactic sugar around promise. Behind the scene `async-await` is just promise. So both are same, it's just `async-await` is new way of writing code. `async-await` solves few of the short-coming of Promise like `Promise Chaining`. `async-await` also increases the readability. So sort of it is always advisable to use `async-await.`

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=6nv3qy3oNkc&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=4&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/6nv3qy3oNkc/0.jpg" width="750"
alt="async-await in Javascript Youtube Link"/></a>
