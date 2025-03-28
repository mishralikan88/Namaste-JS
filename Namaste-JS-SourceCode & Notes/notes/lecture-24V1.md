# Promise.allSettled(<Iterable>) –

**Case 1: If all of the promises are resolved.**

In our case, Promise.allSettled() makes three API calls for three promises in parallel and wait for all the promises to get resolved. So, it will take time for the promise which takes maximum time to get resolved. Promise.allSettled() returns an array of promise results.


**Case 2: If one/some of the promises are rejected.**

If one/some of the promises is/are rejected, then this API will wait for other promises to get settled(resolved/rejected), then returns the array of promise results.

 
# Promise.race(<Iterable>) –

The promise who will finish first or get settled first will be the winner. 

The API will return first settled promise result irrespective of whether the promise is resolved or rejected.


# Promise.any(<Iterable>) – (Success seeking API)

Similar to race API, the only difference is any API will wait for the first promise to get successful. It returns the first successful promise result.

**Case 1: If any of the promise is resolved** 

As soon as one of the promises is resolved, any API returns the resolved promise result.

 
**Case 2: If all of the promise is rejected**

This API will return an aggregate error which will be an array of all three errors thrown by all three promises.

 
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 **To do Items**

 -> code implementation for fetch .fetch polyphil
-> code implementation for promise APIS polyphils 
-> promise output based questiosn 
-> https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943
-> promise code debugging 
attach ss
✔

Promise.all()- **todo Items**

    =>  Explain case 10 11 13 15 20 21 22 23 
    =>  CyclicReferences 
    =>  Handling Large Numbers of Promises Efficiently  
    =>  Debugging & Error Handling,  
    =>  Custom Promise Libraries & Patterns
    =>  Event Loop & Memory Management
    =>  Error Handling in Complex Chains
    =>  Advanced Patterns
    =>  Edge Cases
    =>  Polyfills & Shims  
    =>  Make notes for these topics, which I will do later.(refer lecture-24)

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
