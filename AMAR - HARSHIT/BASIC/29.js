// How to clone array ?

// how to concatenate 2 arrays.

let array1 = ["item1", "item2"];

// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]); //  ['item1', 'item2', 'item3', 'item4']
// let array2 = [].concat(array1,["item3", "item4"]); // syntax - array1.concat([array2] or element(s),[array3] or element(s),...) => gives a new concatenated array.

// new way 

// spread operator - spreads the array into indivisual arr elements . If arr = [ele1,ele2] , ...arr gives ele1,ele2.

let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)
