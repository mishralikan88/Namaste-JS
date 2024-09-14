class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Static method
  // Static methods belong to the class itself rather than any instance of the class.
  // They are called on the class itself, not on instances of the class.
  // Useful for utility functions or operations that don't depend on instance-specific data.
  static classInfo() {
    return "This is the Person class";
  }

  // Static property
  // Static properties also belong to the class itself, not to any specific instance.
  // They can be used to store constants or shared values that are relevant to the class as a whole.
  static desc = "Static property";

  // Getter method
  // This is an instance method that returns the full name of the person.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter method
  // This allows setting the full name in a single string, which is split into first and last names.
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Instance method
  // This method returns a string indicating that the person is eating.
  eat() {
    return `${this.firstName} is eating`;
  }

  // Instance method
  // This method checks if the person is super cute based on their age.
  isSuperCute() {
    return this.age <= 1;
  }

  // Instance method
  // This method returns true, indicating that the person is cute.
  isCute() {
    return true;
  }
}

const person1 = new Person("harshit", "sharma", 8);

// Accessing static methods and properties
// Static methods and properties are accessed through the class name, not through instances.
const info = Person.classInfo(); // Correct usage: Access static method through class name
console.log(info); // Output: This is the Person class

// Accessing static properties
// Static properties are also accessed through the class name.
console.log(Person.desc); // Output: Static property

// Accessing instance methods and properties
// Instance methods and properties are accessed through instances.
console.log(person1.eat()); // Output: harshit is eating
console.log(person1.fullName); // Output: harshit sharma

// Trying to access static properties from an instance will be undefined.
console.log(person1.desc); // Output: undefined

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Deep Dive >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Static Methods and Properties in JavaScript

// Static Methods and Properties are associated with the class itself rather than with instances of the class. They are accessed directly on the class rather than on instances created from the class.

// Here's a breakdown of why and when you might use static methods and properties:

// Static Methods

// Definition: Methods that belong to the class itself rather than any instance of the class.

// Access: They are called directly on the class (e.g., ClassName.methodName()).

// Purpose: Useful for utility functions or operations that are relevant to the class as a whole, but do not depend on instance-specific data.

// Example:

class MathUtils {
  // Static method for adding two numbers
  static add(a, b) {
    return a + b;
  }

  // Static method for subtracting two numbers
  static subtract(a, b) {
    return a - b;
  }

  // Static method for multiplying two numbers
  static multiply(a, b) {
    return a * b;
  }

  // Static method for dividing two numbers
  static divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Using static methods without creating an instance of MathUtils
console.log(MathUtils.add(5, 3));       // Output: 8
console.log(MathUtils.subtract(10, 4)); // Output: 6
console.log(MathUtils.multiply(7, 6));  // Output: 42
console.log(MathUtils.divide(20, 4));   // Output: 5

// Attempting to call static methods on an instance (will not work)
const math = new MathUtils();
// console.log(math.add(5, 3));  // Error: math.add is not a function

// Explanation:

// Static Methods:
// Methods like add, subtract, multiply, and divide are defined as static using the static keyword.
// These methods perform mathematical operations and do not rely on any instance-specific data.

// Utility Functions:
// Static methods are used here for utility functions that are general-purpose and do not need to interact with instance properties.
// They provide functionality that is useful across the application, regardless of specific instance states.

// Usage:
// Static methods are called directly on the class (MathUtils.add(5, 3)) rather than on an instance of the class.
// This is efficient for utility functions where the methods do not require or modify instance-specific data.

// Benifits - 
// Access without Instantiation: Static methods can be called directly on the class without needing to create an instance. This can save memory and processing time if the method is commonly used and does not require object state.


// Static Properties
// Definition: Properties that belong to the class itself rather than to instances of the class.
// Access: They are accessed directly on the class (e.g., ClassName.propertyName).
// Purpose: Useful for constants or values that are shared across all instances or relevant at the class level.

// Example:
class Config {
  // Static property
  static defaultLanguage = 'English';
}

// Accessing the static property directly on the class
console.log(Config.defaultLanguage); // Output: English


// Explanation:

// defaultLanguage is a static property. It is associated with the Config class rather than any specific instance.
// This is useful for constants or configuration values that should be shared across all instances of the class.

// Why Use Static Methods and Properties?

// Utility Functions: Static methods are great for utility functions that don't need access to instance-specific data. For example, a class might have static methods for mathematical operations that don't require knowledge about individual instances.

// Shared Data: Static properties can hold data or constants that are common to all instances. This helps ensure that certain values are consistent across the class and not duplicated for each instance.

class Library {
  // Static property to hold the library hours for all instances
  static hours = {
    weekdays: '9 AM - 6 PM',
    weekends: '10 AM - 4 PM'
  };

  constructor(name) {
    this.name = name;
  }

  // Instance method to get the library hours
  getHours() {
    return Library.hours;
  }
}

// Creating instances of Library
const centralLibrary = new Library("Central Library");
const branchLibrary = new Library("Branch Library");

// Accessing static property via class name
console.log(Library.hours);
// Output: { weekdays: '9 AM - 6 PM', weekends: '10 AM - 4 PM' }

// Accessing static property via instance
console.log(centralLibrary.getHours());
// Output: { weekdays: '9 AM - 6 PM', weekends: '10 AM - 4 PM' }

console.log(branchLibrary.getHours());
// Output: { weekdays: '9 AM - 6 PM', weekends: '10 AM - 4 PM' }



// Namespace Organization: Static methods and properties help organize related functions and data under a single class, avoiding clutter in global space and providing a clean, structured approach to related functionality.

// Class-Level Logic: Some logic applies to the class as a whole rather than any individual instance. Static methods and properties are ideal for such class-level operations or settings.