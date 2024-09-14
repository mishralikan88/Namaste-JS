// difference between dot and bracket notaion

const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"] // spaced keys are enclosed with in ""

}

console.log(person["person hobbies"]); // DOT notation does not work here.square bracket notation works.
person[key] = "harshitvashisth@gmail.com"; // dictionary update in python // prop will be added to our object here
console.log(person);