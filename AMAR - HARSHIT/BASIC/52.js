// rest parameter - 

// function myFunc(a,b,...c){ // a and b are values where as c receives values inside of an array and ... denotes rest operator.
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10); // packing
console.log(ans);


// rest parameter is like normal function parameter , but the only difference is it receives argument values within an array.