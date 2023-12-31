// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a, b = 0) {
  // If no value is supplied in the function call default value of b will be 0 .
  return a + b;
}

const ans = addTwo(4, 8);
const answer = addTwo(4);
console.log(ans); // 12
console.log(answer); // 4

// Rule

// Non-default parameter comes first before default parameter . (ND)
