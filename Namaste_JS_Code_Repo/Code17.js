// y is a Higher Order Function whereas x is a callback function.

// function x() {
//     console.log("Hi")
// }

// function y(x) {
//     x()
// }

// y(x)

// const radius = [1, 2, 3, 4]

// const calculateArea = (radius) => {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))



// const calculateCircumference = (radius) => {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }

// console.log(calculateCircumference(radius))


const radius = [1, 2, 3, 4]

const area = (radius) => {
    return Math.PI * radius * radius
}

const circumference = (radius) => {
    return 2 * Math.PI * radius
}

// const calculate = function (radiusArr, Operation) {
//     const output = []
//     for (let i = 0; i < radiusArr.length; i++) {
//         output.push(Operation(radiusArr[i]))
//     }
//     return output
// }

// console.log(calculate(radius, area))

// console.log(calculate(radius, circumference))

Array.prototype.calculate = function (Operation) {
    const output = []
    // this - array on which calculate is called. radius is the array in our case.
    for (let i = 0; i < this.length; i++) { 
        output.push(Operation(this[i]))
    }
    return output
}

console.log(radius.calculate(circumference))
console.log(radius.calculate(area))

// calculate is nothing but polyphil for map