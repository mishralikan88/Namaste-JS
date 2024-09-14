// iterables - In JavaScript, iterables are objects that can be iterated over, meaning their elements can be accessed one by one using constructs like for...of loops or the spread operator (...).

// string & array are iterable. 

// Array -

const items = ['item1', 'item2', 'item3'];
for (let item of items) {
    console.log(item);
}

const newArr = [...items]; // ['item1', 'item2', 'item3'] // Using the spread operator to convert iterable to another collection

// string - array like object jinke pas length property hoti hai aur jiko hum index se access kar sakte hai

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);