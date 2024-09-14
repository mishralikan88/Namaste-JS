
// trim() // Trims white spaces from the begining and end of the string
// toUpperCase() // Upper case string
// toLowerCase() // Lower case string
// slice()

// When these methods are applied to a string , this returns a modified string.
// The original string will not be mutated/changed.Thats why strings are immutable.

let firstName = " harshit ";

console.log(firstName.length);
firstNameTrim = firstName.trim(); // firstName.trim() returns a new string "harshit". ( strings are immutable )
console.log(firstNameTrim)
console.log(firstName.length);
firstNameUpper = firstName.toUpperCase();
console.log(firstNameUpper)
firstNameLower = firstName.toLowerCase();
console.log(firstNameLower);


// start index (inclusive)
// end index (exclusive)
// stringName.slice(start,end)

let newString1 = firstName.slice(0,4); 
console.log(newString1);

let newString2 = firstName.slice(1); // end index - string endindex + 1  (optional)
console.log(newString2);