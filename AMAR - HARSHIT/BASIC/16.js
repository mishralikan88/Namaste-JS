// and (&&) , or (||) operator 


let firstName = "Harshit";
let age = 16;

// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){ // evaluates to true if all the conditions are true
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }


if(firstName[0] === "H" || age>18){ // evaluates to true if one of the conditions is true.
    console.log("inside if");
}else{
    console.log("inside else");
}