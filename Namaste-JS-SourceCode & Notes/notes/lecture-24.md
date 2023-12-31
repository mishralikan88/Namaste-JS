Chapter 24: Promise APIS + Interview Questions

Promise APIS

* Promise.all
* Promise.allSettled
* Promise.race
* Promise.any

Promise.all(<Iterable>) – (Fail Fast API)

Iterable is usually an array of promises. Let’s consider Three promises within the Iterable array. [P1, P2, P3]

Case 1: If all of the promises are resolved.

In our case, Promise.all() makes three API calls for three promises in parallel and wait for all the promises to get resolved. So, this API will take time for the promise which takes maximum time to get resolved. Promise.all() returns an array of promise results.


  
 
 

Case 2: If any/some/all of the promises are rejected. 

If any one of the promises is failed, then this API will throw an error and it will not wait for the other promises to get settled (resolved/rejected). Whatever error it will get from the rejected promise, the API will throw the same error as a result. 

 
 
 



Promise.allSettled(<Iterable>) –

Case 1: If all of the promises are resolved.

In our case, Promise.allSettled() makes three API calls for three promises in parallel and wait for all the promises to get resolved. So, it will take time for the promise which takes maximum time to get resolved. Promise.allSettled() returns an array of promise results.


  

 

 
Case 2: If one/some of the promises are rejected.

If one/some of the promises is/are rejected, then this API will wait for other promises to get settled(resolved/rejected), then returns the array of promise results.

 
 
 


Promise.race(<Iterable>) –

The promise who will finish first or get settled first will be the winner. 

The API will return first settled promise result irrespective of whether the promise is resolved or rejected.

 


 
 
 
 




Promise.any(<Iterable>) – (Success seeking API)

Similar to race API, the only difference is any API will wait for the first promise to get successful. It returns the first successful promise result.

Case 1: If any of the promise is resolved 

As soon as one of the promises is resolved, any API returns the resolved promise result.

 
 
 


Case 2: If all of the promise is rejected

This API will return an aggregate error which will be an array of all three errors thrown by all three promises.

 
 
 
 


 







 





 








