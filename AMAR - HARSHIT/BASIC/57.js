// map method 

const numbers = [3, 4, 6, 1, 8];

const square = function (number) {
    return number * number;  // operation
}
const squareNumber1 = numbers.map(square);
console.log(squareNumber1);


const squareNumber = numbers.map((number, index) => {
    return index;
});
console.log(squareNumber);



const users = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohit", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

const userNames = users.map((user) => {
    return user.firstName;
});

console.log(userNames);