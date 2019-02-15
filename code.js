// // // // // // // // // // // // // // //
// // // // Types of Functions // // // // 
// // // // // // // // // // // // // //

// function declaration
function printArea (length, width) {
    console.log(length*width);
}
printArea(10,2);



// function expression
const printArea2 = function(length, width) {
    console.log(length * width);
}



// arrow function expression --> this is new function, so it is better
const printArea3 = (length, width) => {
    console.log(length * width);
}