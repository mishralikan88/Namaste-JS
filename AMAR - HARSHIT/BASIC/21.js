// while loop example - Find sum from 0 to 100


let total = 0; // 0 + 1 + 2 + 3 + ......

let i = 0;

while(i<=100){
    total = total + i;  
    i++;
}

console.log(total);

// 0 (total) + 0 (i) = 0 (total)
// 0 (total) + 1 (i) = 1 (total)
// 1 (total) + 2 (i) = 3 (total)
// 3 (total) + 3 (i) = 6 (total)
// 6 (total) + 4 (i) = 10 (total)
// .. 


// Sum / Total formula - (n*(n+1)/2)

// let num = 100;
// let total = (num*(num+1))/2;
// console.log(total);