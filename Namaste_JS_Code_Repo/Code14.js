// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("button clicked")
// })

// document.getElementById("clickMe").addEventListener("click",()=>{
//     console.log("Arrow function invoked by button click")
// })




// let count = 0;
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     ++count 
//     console.log("Button clicked",count)
// })



// Event listener + Closure - callback function xyz forms a closure with outer function attachEventList scope.

function attachEventList(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        ++count
        console.log("button clicked",count)
    })
}
attachEventList()