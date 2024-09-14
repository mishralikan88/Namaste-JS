
// switch statement 


// let day = 7; 


// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }


// let day = 5;

// switch(day){ 
//     case 0: // if day = 0 , execute case 0 stmts until a "break" is encounted
//         console.log("Sunday");
//         break; // Breaks the flow and transfers control outside of the switch statement.
//     case 1: // if day = 1
//         console.log("Monday");
//         break;
//     case 2: // if day = 2
//         console.log("Tuesday");
//         break;
//     case 3: // if day = 3
//         console.log("Wednesday");
//         break;
//     case 4: // if day = 4
//         console.log("Thrusday");
//         break;
//     case 5: // if day = 5
//         console.log("Friday");
//         break;
//     case 6: // if day = 6
//         console.log("Saturday");
//         break;
//     default: // Most like an else block.If any of the conditions are not matched this block code will execute.
//         console.log("Invalid Day");
// }


let dayx = 1;

switch(dayx){ 
    case 0: 
        console.log("Sunday");
    case 1: 
        console.log("Monday");
    case 2: 
        console.log("Tuesday");
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thrusday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}

// Monday 
// Tuesday
// Wednesday .

// Why? We haven't used break inside case 1 and case 2. Inside case 3, the JavaScript engine encounters break 
// and exits the switch statement. As soon as the JavaScript engine encounters break inside case 3, all the console
// messages are printed.


// switch syntax -

// switch(varName){
    
//     case <varValue1>: stmts
    
//     case <varValue2>: stmts

//     case <varValue3>: stmts

//     case <varValue4>: stmts

// }