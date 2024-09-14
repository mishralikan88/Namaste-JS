// sort method 
// ASCII TABLE 
// char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  -

// The sort() method in JavaScript is used to sort the elements of an array in place and return the sorted array. By default, it converts elements to strings and sorts them in ascending order based on their UTF-16 code units.

// syntax - array.sort([compareFunction]);

// Parameters:
// compareFunction (optional): A function that defines the sort order. If omitted, elements are sorted as strings.


// Default Behavior:
// Without a compareFunction, sort() converts elements to strings and compares their UTF-16 code units values, resulting in lexicographical (alphabetical) order.

const numbers = [10, 1, 19, 2, 33, 4, 25];
numbers.sort();
console.log(numbers);  // Output: [1, 10, 19, 2, 25, 33, 4] (sorted as strings: "1", "10", "19", "2", "25", "33", "4")

const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
userNames.sort();
console.log(userNames); //  ['ABC', 'Harshit', 'aabc', 'abcd', 'harshit', 'mohit', 'nitish']

// Using compareFunction:
// A compareFunction allows you to specify the sort order. The function takes two arguments (a and b) and should return:

// A negative number if a should be before b.
// Zero if a and b are considered equal.
// A positive number if a should be after b.


const numbers1 = [5, 9, 1200, 410, 3000];
console.log(numbers1)

numbers1.sort((a, b) => b - a);     // Descending sort
console.log(numbers1);              // [3000, 1200, 410, 9, 5]

numbers1.sort((a, b) => a - b);     // Ascending sort
console.log(numbers1);              // [5, 9, 410, 1200, 3000]



const products = [
    { productId: 1, produceName: "p1", price: 300 },
    { productId: 2, produceName: "p2", price: 3000 },
    { productId: 3, produceName: "p3", price: 200 },
    { productId: 4, produceName: "p4", price: 8000 },
    { productId: 5, produceName: "p5", price: 500 },
]


products.sort((a, b) => {
    return a.price - b.price // Ascending sort
});

console.log(products)


products.sort((a, b) => {
    return b.price - a.price; // Descending sort
});

console.log(products) // Mutates the original array . Both console will print descending array 


// slice(0) creats a new array 

const lowtoHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price // Ascending sort
});

console.log(lowtoHigh)


const HighToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price; // Descending sort
});

console.log(HighToLow)

const users = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohit", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

users.sort((a, b) => {
    if (a.firstName > b.firstName) {
        return 1;   // a should come after b
    } else if (a.firstName < b.firstName) {
        return -1;  // a should come before b
    } else {
        return 0;   // a and b are equal
    }
});

console.log(users); // users are inside of an array in firstName ascending sorted order.