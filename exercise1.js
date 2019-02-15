// 1 Dimensional:
// A character can move forward and backward along a tightrope. They start at position 0, facing the
// positive direction and can move in the positive and the negative directions. They can also change
// direction. Use variables to keep track of their position and direction. Then define the following functions:
//      ● moveForward: takes a distance parameter. Move the character forward (based on the direction
//          they are facing) the specified distance.
//      ● moveBackward: takes a distance parameter. Move the character backward (based on the
//          direction they are facing) the specified distance.
//      ● turnAround: reverse the direction the character is facing.
//      ● printLocation: logs the current position to the console.
// Call the functions in the following order and check the results:
// 1. moveForward 5
// 2. moveBackward 3
// 3. printLocation … should print 2
// 4. turnAround
// 5. moveForward 10
// 6. moveBackward 5
// 7. printLocation … should print -3
// Wrap the whole program in an IIFE.


"use strict"; 
{ 
let position = 0;
let direction = 1; //positive=1, negative=-1;

function moveForward(num) {
    position += (num * direction);
}

function moveBackward(num) {
    position -= (num*direction);
}

function turnAround() {
   direction *= -1;
}

function printLocation() {
  console.log(position);
}

// console.log(`position is: ${position}`)
// console.log(`direction is: ${direction}`)

moveForward(5);
// console.log(`position is: ${position}`)
// console.log(`direction is: ${direction}`)

moveBackward(3);
// console.log(`position is: ${position}`)
// console.log(`direction is: ${direction}`)

printLocation()

turnAround();
// console.log(`position is: ${position}`)
// console.log(`direction is: ${direction}`)

moveForward(10);
// console.log(`position is: ${position}`)

moveBackward(5);
// console.log(`position is: ${position}`)

printLocation()


}