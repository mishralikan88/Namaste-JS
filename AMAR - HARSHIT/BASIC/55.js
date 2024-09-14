// Function returning Function 

function myFunc() {
    function hello() {
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());