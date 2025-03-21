// reduce 

const numbers = [1, 2, 3, 4, 5, 10];

// Aim : sum of all the numbers in array 

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// accumulator , currentValue,  return 
// 0               1              1
// 1               2              3
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 15000 },
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// totalprice      currentProduct                                      currentProduct.price      return
// 0               {productId: 1, productName: "mobile", price: 12000} -> 12000                  12000
// 12000           {productId: 2, productName: "laptop", price: 22000} -> 22000                  12000+22000 = 34000
// 34000           {productId: 3, productName: "tv", price: 15000}     -> 15000                  12000+22000+15000 = 49000