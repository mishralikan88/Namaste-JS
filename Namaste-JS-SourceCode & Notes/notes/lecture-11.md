# Episode 11 : setTimeout + Closures Interview Question

> **Time, tide and Javascript wait for none.**

*   ```js
    function x() {
        var i = 1;
        setTimeout(function() {
            console.log(i);
        }, 3000);
        console.log("Namaste Javascript");
    }
    x();

    // Output:
    // Namaste Javascript
    // 1 // after waiting 3 seconds
    ```
    * We expect JS to wait 3 sec, print 1 and then go down and print the string. But JS prints string immediately, waits 3 sec and then prints 1.
    * The function inside setTimeout forms a closure and it remembers reference to i.So wherever the function goes it carries this ref along with it. 
    * setTimeout takes this callback function & attaches a timer of 3000ms and stores it. Now the JS goes to next line without waiting and prints the string. 
    * After 3000ms runs out, JS takes the function, put it into call stack and runs it. 
 
* Q: Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question
  
    ```js
    function x() {
    for(var i = 1; i<=5; i++){
        setTimeout(function() {
        console.log(i);
        }, i*1000);
        }
        console.log("Namaste Javascript");
    }
    x();

    // Output:
    // Namaste Javascript
    // 6
    // 6
    // 6
    // 6
    // 6
    ```

    **why it is behaving like this ?**

    * This happens because of closures. When setTimeout stores the function somewhere and attaches a timer to it, the function remembers its reference to i, **not the value of i**. So all 5 copies of function point to the same reference of i.
        
    * setTimeout is a JS WEB API which stores these 5 functions in a separate memory space and pushes them into the Message queue one by one once the timer is expired. In the mean time, JS executed the next line and prints  string 'Namaste Javascript'.
        
    * By the time call stack is empty the value of i is changed to 6.At this moment Browser's Event loop mechanism kicks in which pushes these message queue functions one by one to the call stack and inside the callstack these functions get executed one after another and we see the outputs like these.

    * To avoid this, we can use **let** instead of **var** as let has Block scope. For each iteration, the i is a new variable altogether(new copy of i). Everytime setTimeout is run, the inside/callback function forms closure with new variable i.

    **Implementation using **var**?
 
        ```js
        function x() {
            for(var i = 1; i<=5; i++){
            function close(i) {
                // I've put the setT function inside a new function close() to form a closure with respect to close().why? Because every time setT() is called it creates a local copy of i at that momemnt. This is because of closure's added advantage.
                setTimeout(function() {
                console.log(i);
                }, i*1000);
                
            }
            close(i); // Everytime you call close(i) it creates new copy of i.
            }
            console.log("Namaste Javascript");
        }
        x();
        ```
 
<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=eBTBG4nda2A&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/eBTBG4nda2A/0.jpg" width="750"
alt="setTimeout + Closures Interview Question in JS Youtube Link"/></a>