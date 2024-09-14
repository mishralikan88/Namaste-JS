const user1 = {
    firstName: "harshit",
    age: 8,
    about() {  // short-hand syntax for defining a method
        console.log(this.firstName, this.age);
    }
}

user1.about();

// about: function() {
//     console.log(this.firstName, this.age);
// }

// short-hand syntax

// about(){
//     console.log(this.firstName, this.age);
// }  