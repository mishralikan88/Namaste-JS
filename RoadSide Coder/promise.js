// synchronous code

// console.log("Hello")

// console.log("subscribe to road side coder")

// console.log("Finish")


// Asynchronous code 1

// console.log("start")

// setTimeout(() => {
//     console.log("subscribe to Roadside coder")
// },1000)

// console.log("Finish")




// Asynchronous code 2

// console.log("start")

// setTimeout(() => {
//     console.log("subscribe to Roadside coder")
// },0)

// console.log("Finish")


// Asynchronous code 3

// console.log("start")

// function importantAction(userName){
//     setTimeout(() => {
//         return `subscribe to ${userName}`
//     }, 1000);
// }

// const message = importantAction("Road-side coder") // importantAction does async operation. message holds undefined at present.
// console.log(message)

// console.log("stop")



// But we want the message "subscribe to ${userName}"" in our console  where userName is Road-side coder.
// Asynchronous Code 4 - callback introduced

// console.log("start")

// function importantAction(userName, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${userName}`) // Executing callback function when data is available. ( when timer expires )
//     }, 1000);
// }

// importantAction("Roadside Coder", function (message) { // passing callback function inside importantAction()
//     console.log(message)
// })


// console.log("end")


// Asynchronous code 5

// console.log("start")

// function importantAction(userName, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${userName}`)
//     }, 500);
// }


// function likeVideo(video, cb) {
//     setTimeout(() => {
//         cb(`like the ${video}`)
//     }, 1000);
// }


// importantAction("Likan", function (message) {
//     console.log(message)
// })

// likeVideo("javascript Interview question", (action) => {
//     console.log(action)
// })

// console.log("end")


// Asynchronous Code 6 - Debug the code to check the callBack flow and setTimeout  flow.

// console.log("start")



// function importantAction(userName, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${userName}`)
//         console.log("importantAction function execution has been finished")
//     }, 1000);
// }

// // We want to Execute likeVideo() after the importantAction() has finished executing.

// function likeVideo(video, cb) {
//     setTimeout(() => {
//         cb(`like the ${video}`)
//         console.log("likeVideo function execution has been finished")
//     }, 1000);
// }

// // We want to Execute shareVideo() after the likeVideo() has finished executing.

// function shareVideo(shareVideoData, cb) {
//     setTimeout(() => {
//         cb(`Share my video ${shareVideoData}`)
//         console.log("shareVideo function execution has been finished")
//     }, 1000);
// }


// // callback hell - code will grow horizontally and its very difficult to maintain the code.Promise helps to the rescue.

// importantAction("Likan", function (message) {
//     console.log(message)
//     likeVideo("javascript Interview question", (action) => {
//         console.log(action)
//         shareVideo("video 1", (sharevideomessage) => {
//             console.log(sharevideomessage)
//         })
//     })
// })

// console.log("end")

// Asynchronous Code 7 - promise - syntax - new Promise(executor)

// console.log("start")

// const sub = new Promise((resolve, reject) => {
//     // async operation
//     setTimeout(() => {
//         const result = true; // Check false case too
//         if (result) resolve("Subscribe to Roadside coder");
//         else reject(new Error("Why have you not  subscribed to Roadside coder ?"))
//     }, 10000);
// })

// console.log("promise >>>",sub)

// sub
//     .then((res) => { console.log(res) })  // when resolve is invoked, then attached callBack gets executed. res = argument to resolve()
//     .catch((err) => { console.log(err) }) // when reject is invoked, catch attached callBack gets executed. err = argument to reject()

// console.log("end")

// Run the program . keep typing sub in the console . We will get promise pending .
// After 10 sec, we will get the resolved promsie data & at this momemnt, If we type sub in the console, we will get promise fulfilled.



// Asynchronous Code 8

// console.log("start")

// // Directly resolving and rejecting a Promise.

// Promise.resolve("subscribe to RoadSide Coder").then((res) => { console.log(res) }) // async operation


// Promise.reject(new Error("rejected")).catch((err) => { console.log(err) }) // async operation


// console.log("end")


// Asynchronous Code 9 - promise - a JS object that represents eventual completion or failure of an async task.

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 1000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video}`)
//         }, 1000);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }

// // Promise hell
// importantAction("Likan")
//     .then((res) => {
//         console.log(res)
//         likeVideo("JS interview question").then((res) => {
//             console.log(res)
//             shareVideo("video 1").then((res) => { console.log(res) })
//         })
//     })
//     .catch((err) => { console.log(err) })



// console.log("end")


// Asynchronous Code 10 - promise - promise chaining to prevent promise hell

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 1000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video}`)
//         }, 1000);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }

// // Promise hell

// // importantAction("Likan")
// //     .then((res) => {
// //         console.log(res)
// //         likeVideo("JS interview question").then((res) => {
// //             console.log(res)
// //             shareVideo("video 1").then((res) => { console.log(res) })
// //         })
// //     })
// //     .catch((err) => { console.log(err) })

// // Promise chain

// importantAction("Likan")
//     .then((res) => {
//         console.log(res)
//         return likeVideo("JS inetrview question") // Why return ? Ans is to return a promise where we can attach next then() to resolve the returned promise.
//     })
//     .then(res => {
//         console.log(res)
//         return shareVideo("video 1")
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => { console.log(err) })



// console.log("end")


// Asynchronous Code 11 - Promise combinators

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 1000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video}`) // try with resolve() and check the result.
//         }, 1000);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }


// // const PromiseArr = Promise.all([importantAction("Roadside coder"), likeVideo("JS interview questions"), shareVideo("video 1")])

// // console.log("Promise",PromiseArr)

// Promise.all([importantAction("Roadside coder"), likeVideo("JS interview questions"), shareVideo("video 1")])
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log("Err:Promises Failed:", err)
//     })

// console.log("end")


// // Asynchronous Code 12 - Promise combinators - Race

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 5000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video}`) // try with reject() and check the result.
//         }, 500);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }


// Promise.race([importantAction("Roadside coder"), likeVideo("JS interview questions"), shareVideo("video 1")])
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log("Err:Promises Failed:", err)
//     })

// console.log("end")


// Asynchronous Code 13 - Promise combinators - allSettled

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 5000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`like the ${video}`)
//         }, 500);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }


// Promise.allSettled([importantAction("Roadside coder"), likeVideo("JS interview questions"), shareVideo("video 1")])
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log("Err:Promises Failed:", err)
//     })

// console.log("end")


// // Asynchronous Code 14 - Promise combinators - any

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 5000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`like the ${video}`)
//         }, 500);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }


// Promise.any([importantAction("Roadside coder"), likeVideo("JS interview questions"), shareVideo("video 1")])
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log("Err:Promises Failed:", err)
//     })

// console.log("end")


// Asynchronous Code 15 - async - await - Exception handling

// console.log("start")


// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 5000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`like the ${video}`)
//         }, 500);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }


// const result = async () => {
//     try {
//         const message1 = await importantAction("Roadside coder")
//         console.log(message1)
//         const message2 = await likeVideo("Js interview question") // reject case
//         console.log(message2)
//         const message3 = await shareVideo("Video 1")
//         console.log(message3)
//     } catch (err) {
//         console.log("promises failed", err)
//     }
// }

// result()

// console.log("end")


// Asynchronous Code 16 - output qns

// console.log("start")

// // When a promise is initialised its gonna find whatever synchronous code is inside of it. JS engine excutes syn code first and then async code.

// const promise1 = new Promise((resolve,reject)=>{
//     console.log(1) // sync code
//     resolve(2) // async code. 2 will only be printed when then attached callback is called / when the promise is resolved.
// })

// promise1.then(res=> console.log(res))


// console.log("end")

// // output : start -> 1  -> end -> 2


// Asynchronous Code 17 - output qns

// console.log("start")

// const promise1 = new Promise((resolve,reject)=>{
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })

// promise1.then(res=> console.log(res))

// console.log("end")

// // output - start -> 1 -> 3 -> end -> 2

// Asynchronous Code 18 - output qns

// console.log("start")

// const promise1 = new Promise((resolve,reject)=>{
//     console.log(1)
//     // resolve(2)
//     console.log(3)
// })

// promise1.then(res=> console.log(res)) // then wont be called because the promise is not settled (resolved)

// console.log("end")

// // output - start ->  1 -> 3 -> end



// Asynchronous Code 19 - output qns

// console.log("start")

// const fn = () => {
//     return new Promise((resolve, reject) => {
//         console.log(1)
//         resolve("success")
//     })
// }

// console.log("middle")

// fn().then(res=>console.log(res))

// console.log("end")

// // output - start -> middle -> 1 -> end -> success




// Asynchronous Code 20 - promise chaining output question

// function job() {
//     return new Promise(function (resolve, reject) {
//         reject(new Error("Error occured")) // reject()
//     })
// }

// let promise = job()

// // promise
// //     .then(function () { console.log("success 1") })
// //     .then(function () { console.log("success 2") })
// //     .then(function () { console.log("success 3") })
// //     .catch(function (ex) { console.log("Error 1", ex) })
// //     .then(function () { console.log("success 4") })
// //     .then(function () { console.log("success 5") })

// // Error 1 Error occured -> success 4 -> success 5


// promise
//     .then(function () { console.log("success 1") })
//     .then(function () { console.log("success 2") })
//     .then(function () { console.log("success 3") })
//     .catch(function (err) {
//         console.log("Error 1", err)
//         throw new Error("Error in catch")
//     })
//     .then(function () { console.log("success 4") })

// //   Error 1 Error: Error occured
// //     at promise.js:600:16
// //     at new Promise (<anonymous>)
// //     at job (promise.js:599:12)
// //     at promise.js:604:15
// //     promise.js:623 Uncaught (in promise) Error: Error in catch
// //     at promise.js:623:15


// // .then() after .catch() runs as long as .catch() does not throw an error or return a rejected promise.
// // This allows you to handle any further processing after catching an error


// Asynchronous Code 21 - promise chaining output question

// function job(state) {
//     return new Promise((resolve, reject) => {
//         if (state) { resolve("success") }
//         else { reject("error") }
//     })
// }

// let promise = job(true)

// promise
//     .then(function (data) {
//         console.log(data)  // success
//         return job(false)  // reject case. Will land on Next catch
//     })
//     .then((data) => {
//         console.log(data)  // Wont be excuted.
//     })
//     .catch(function (error) {
//         console.log(error)    // error
//         return "Error cought" // resolved case resolve("Error cought")
//     })
//     .then(function (data) {
//         console.log(data)     // Error cought
//         return job(true)
//     })
//     .catch(function (err) {   // Won't be executed. Why ? Because its a resolve case & there is no then() attached.
//         console.log("he he ")
//         console.log(err)
// })

// // output -> success -> error -> Error cought


// Asynchronous Code 22 - promise chaining output question

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) resolve("success")
//         else reject("Error")
//     })
// }

// let promise = job(true)

// promise.
//     then(function (data) {
//         console.log(data) // success
//         return job(true)
//     })
//     .then(function (data) {
//         if (data !== "victory") throw "defeat" // rejected promise. It'll try to find the next catch
//         return job(true) // code will not be executed
//     })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (error) {
//         console.log(error) // defeat
//         return job(false) // rejected promise.It'll try to find the next catch
//     })
//     .then((data)=>{
//         console.log(data)
//         return job("true")
//     })
//     .catch((err)=>{console.log(err) // Error
//         return "Error Cought" // resolved promise.
//     })
//     .then((data)=>{
//         console.log(data) // Error cought
//         return new Error("test") // rejected case and there is no catch block after this to handle the error.
//     })

//     // output -> success -> defeat -> error -> Error caught

// Asynchronous Code 23 - promise chaining

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First") // resolving firstPromise
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise)
// })


// secondPromise.then((res) => {
//     return res // returning firstPromise
// })
//     .then(res => console.log(res)) // First


// Asynchronous Code 24 - reWrite the below example using async and await

// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if (response.status == 200) {
//             return response.json()
//         }
//         else {
//             throw new Error(response.status)

//         }
//     })
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err)
// })



// async function loadJson(url) {

//     let response = await fetch(url) // fetch(url) returns a promise

//     if (response.status == 200) {
//         let json = await response.json() // response.json() returns a promise
//         return json
//     }
//     throw new Error(response.status)
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err)
// })


// Asynchronous Code 25 - Solve promise recursively



// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`subscribe to ${userName}`)
//         }, 5000);
//     })
// }


// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video}`)
//         }, 500);
//     })
// }


// function shareVideo(shareVideoData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share my Video ${shareVideoData}`)
//         }, 1000);
//     })
// }

// function RecursivePromise(funcPromise) {

//     if (funcPromise.length === 0) { // base case
//         return
//     }
//     const currPromise = funcPromise.shift() // Shifts left-side item from the array & mutates the original array.
//     currPromise.then((data) => { console.log(data) }).catch((err) => { console.error(err) })

//     RecursivePromise(funcPromise) // recursive call

// }


// RecursivePromise([importantAction("RoadSideCoder"), likeVideo("Javascript Interview questions"), shareVideo("video 1")])


// https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=13

// 47:06 >>> 1:07:24
