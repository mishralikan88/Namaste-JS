// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName); // If user does not exist we get undefined , if exist we get the actual user object.
console.log(user?.address?.houseNumber);