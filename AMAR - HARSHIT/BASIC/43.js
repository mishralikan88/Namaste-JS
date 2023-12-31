// Nested destructuring

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [user1, user2, user3] = users;
console.log(user1);

// console.log(user2)
// console.log(user3)
//const {firstName:user1firstName,userId} = user1 // user1firstName is alternate name to firstName

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
