const thenable = {
  then(resolve) {
    console.log("Inside thenable.then() - Received resolve function:", resolve); // This confirms JS provides a resolve function
    setTimeout(() => resolve("Thenable resolved"), 2000); // Calls resolve after 2 sec
  }
};

// 🟢 Wrapping the thenable inside Promise.resolve() which converts the thenable into a real promise.
const wrappedThenable = Promise.resolve(thenable);
console.log("Wrapped Thenable (Before Resolving):", wrappedThenable); 

// 🟢 Creating a normal promise that resolves after 3 sec
const wrappedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("P2 done"), 3000);
});
console.log("Wrapped Promise (Before Resolving):", wrappedPromise);

// 🟢 Using Promise.all() to wait for both promises to resolve
Promise.all([wrappedThenable, wrappedPromise]).then((result) => {
  console.log("Final Resolved:", result);
});
