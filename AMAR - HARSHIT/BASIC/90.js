// Class definition with getter and setter methods
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; // Directly setting properties in constructor
    this.lastName = lastName;
    this.age = age;
  }

  // Getter for fullName property
  get fullName() {
    // Returns the full name by concatenating firstName and lastName
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for fullName property
  set fullName(fullName) {
    // Splits the fullName into firstName and lastName, then sets the properties
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harshit", "sharma", 5);

// Accessing the getter property
console.log(person1.fullName); // Outputs: harshit sharma
// Note: Accessing person1.fullName() would result in an error as fullName is a property, not a method.

// Using the setter to update the full name
person1.fullName = "mohit vashistha"; // Calls the setter, passes "mohit vashistha" inside  fullName parameter and  updates firstName and lastName 
console.log(person1); // Outputs the updated Person object

// Why use getter and setter?
// Getters and setters provide control over property access and modification.

// For example, with a property like ID that should not be negative:
// - Using a setter, you can ensure that negative values are corrected or invalidated.
// - The getter can provide a safe and controlled way to retrieve the property value.

class User {
  constructor(name, id) {
    this.name = name;
    this._id = 0; // Private property for internal use
    this.id = id; // Use the setter to initialize the ID
  }

  // Getter for ID
  get id() {
    return this._id;
  }

  // Setter for ID
  set id(value) {
    // Ensure ID is non-negative
    if (value < 0) {
      console.log("ID cannot be negative. Setting ID to 0.");
      this._id = 0;
    } else {
      this._id = value;
    }
  }
}

// Create a new User with a positive ID
const user1 = new User("Alice", 123);
console.log(user1)
console.log(user1.id); // Output: 123
// Explanation - Constructor Behavior:
// When a new User instance is created with new User("Alice", 123), the constructor initializes this._id to 0.
// It then calls this.id = id with id set to 123. This triggers the set id(value) method.
// Setter Method:
// The setter method set id(value) is invoked with the value 123.
// Since 123 is not less than 0, the else branch of the setter is executed, setting this._id to 123.
// Result:
// The _id property is updated to 123 because the setter method processed the value 123 as valid (non-negative).
// The constructor and the setter method work as designed, and the internal _id property is set to the provided positive value. getter is invoked here to access the id property.


// Create a new User with a negative ID
const user2 = new User("Bob", -45);
console.log(user2.id); // Output: 0 (Negative ID corrected to 0)
// Object Creation:
// When you create user2 with new User("Bob", -45), the constructor is called with name as "Bob" and id as -45.
// Constructor Execution:
// Inside the constructor, this._id is initially set to 0.
// Next, this.id = id is executed with id being -45. This statement triggers the set id(value) method.
// Setter Method:
// The setter method set id(value) is invoked with value equal to -45.
// In the setter, there is a check: if (value < 0). Since -45 is less than 0, the condition is true.
// The console.log("ID cannot be negative. Setting ID to 0."); statement is executed, indicating that negative IDs are not allowed.
// this._id = 0; sets the internal _id property to 0 because the provided ID was negative.
// Getter Method:
// When console.log(user2.id) is executed, the get id() method is called.
// This getter method returns the value of _id, which was set to 0 by the setter.


// Update the ID to a valid positive value
user2.id = 678;
console.log(user2.id); // Output: 678
// Object Creation with Negative ID:
// When new User("Bob", -45) is called, the constructor initializes this._id to 0.
// The statement this.id = id invokes the setter method for id with the value -45.
// The setter detects that -45 is negative, logs the message "ID cannot be negative. Setting ID to 0.", and sets _id to 0.
// Updating the ID:
// user2.id = 678 triggers the setter method for id again, this time with the value 678.
// Since 678 is not negative, the setter sets this._id to 678.
// The getter method id returns the current value of _id, which is now 678.


// Try setting the ID to a negative value
user2.id = -999;
console.log(user2.id); // Output: 0 (Negative ID corrected to 0)
// Object Creation:
// When new User("Bob", -45) is called, the constructor initializes this._id to 0.
// The statement this.id = id invokes the setter method for id with the value -45.
// The setter detects that -45 is negative, logs the message "ID cannot be negative. Setting ID to 0.", and sets _id to 0.
// Updating the ID to a Negative Value:
// user2.id = -999 triggers the setter method for id with the value -999.
// The setter method checks if the value is negative. Since -999 is negative, it logs "ID cannot be negative. Setting ID to 0." and sets _id to 0.
// Getting the ID:
// When console.log(user2.id); is executed, the getter method for id returns the current value of _id, which is 0.





// Data encapsulation and data abstraction


// Data encapsulation  - Data encapsulation is the practice of bundling the data and methods that operate on the data into a single unit or class, while restricting direct access to some of the object's components.

// class User {
//   #password; // Private field (ES2022)

//   constructor(username, password) {
//     this.username = username;
//     this.#password = password;
//   }

//   getPassword() {
//     return this.#password;
//   }

//   setPassword(newPassword) {
//     if (newPassword.length >= 6) {
//       this.#password = newPassword;
//     } else {
//       console.log("Password too short");
//     }
//   }
// }

// const user = new User("JohnDoe", "secret");

// console.log(user.username); // Output: JohnDoe

// console.log(user.getPassword()); // Output: secret

// user.setPassword("newSecret123");

// console.log(user.getPassword()); // Output: newSecret123

// Trying to access #password directly will throw an error

// console.log(user.#password); // SyntaxError: Private field '#password' must be declared in an enclosing class

// The #password field is a private field introduced in ES2022, which cannot be accessed directly from outside the class.

// The getPassword and setPassword methods provide controlled access to the #password field.

// The username property is public & can be accessed directly.









// Data Abstraction - 

// Data abstraction is the concept of providing a simplified interface to interact with an object while hiding its complex internal details.



class BankAccount {
  #balance; // Private field to encapsulate the internal balance data.

  constructor(initialBalance) {
    this.#balance = initialBalance; // Initialize balance with provided amount.
  }

  // Method to deposit money into the account.
  // Encapsulation: Users interact with the balance only through this method.
  deposit(amount) {
    if (amount > 0) { // Validation to ensure deposit amount is positive.
      this.#balance += amount; // Modify the private #balance field.
    } else {
      console.log("Deposit amount must be positive"); // Error message for invalid deposit.
    }
  }

  // Method to withdraw money from the account.
  // Encapsulation: Users interact with the balance only through this method.
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) { // Validation to ensure withdrawal amount is valid.
      this.#balance -= amount; // Modify the private #balance field.
    } else {
      console.log("Invalid withdrawal amount"); // Error message for invalid withdrawal.
    }
  }

  // Method to get the current balance.
  // Encapsulation: Users access the balance only through this method.
  getBalance() {
    return this.#balance; // Return the private #balance field.
  }
}

const account = new BankAccount(1000); // Create a new BankAccount instance with initial balance.
account.deposit(500); // Deposit money into the account.
console.log(account.getBalance()); // Output: 1500, showing the updated balance.
account.withdraw(200); // Withdraw money from the account.
console.log(account.getBalance()); // Output: 1300, showing the updated balance.

// Abstraction is evident because

// Users interact with BankAccount through the methods deposit, withdraw, and getBalance, without needing to know how the balance is stored or managed internally.

// The internal details of how the balance is updated or checked are hidden, providing a simplified interface for managing the bank account.

// Understanding the Interface

// Interface Definition-

// deposit(amount): This method is part of the public interface. It allows users to add funds to the account. The user interacts with the account using this method without knowing the internal implementation of how the balance is updated.
// withdraw(amount): This method allows users to remove funds from the account. Like deposit, users do not need to understand how the balance is managed internally.