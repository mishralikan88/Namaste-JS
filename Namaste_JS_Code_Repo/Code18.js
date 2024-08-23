// polyfill for filter

const numbers = [1, 2, 3, 4]

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            temp.push(this[i])
        }
    }
    return temp
}

const cb = function (num) {
    return num > 2
}

console.log(numbers.myFilter(cb))

// Note - you cant take arrow function becuase this doesnot work with arrow function


// polyfill for reduce

// arr.reduce((acc,curr,i,arr)=>{}, Initial Value)

// syntax - reduce(callback , initialValue)

const nums = [1, 2, 3, 4]

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator // Scalar
}

function sumAcc(acc, currentValue, index, array) {
    return acc + currentValue
}
const sum = nums.myReduce(sumAcc, 0) // reduce(callback , initialValue)
const sumNoAcc = nums.myReduce(sumAcc) // No initial value case