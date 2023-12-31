// getter and setters
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harshit", "sharma", 5);

// getter
// console.log(person1.fullName());// Error
// console.log(person1.fullName); // getter property .No obj.fullName() . obj.fullName is only allowed.

// setter
// person1.fullName = "mohit vashistha"; // setter 
// console.log(person1);

// why getter and setter?
// You will have control over the code . lets say there is a property ID and we know Id cannot be negative .while creating object if we pass negative id to the constructor then the object will have property id as negative.We will loose our validation.To properly validate this field either we put validation logic inside constructor or we can create a setter function where we set id based on specific logic,lets say if id is negative  , set this id to 0.But while accessing this id outside the class , we need a getter. Explore more on this online.

