// Extended Challenge 2 Dimensional:
// A character can move around a map in two dimensions. They start at position 0 North, 0 East, facing
// north and can move in any of the four cardinal directions. They can also change direction. Use variables
// to keep track of their position and direction. Then define the following functions:
//      ● moveForward: takes a distance parameter. Move the character forward (based on the direction
//          they are facing) the specified distance.
//      ● moveBackward: takes a distance parameter. Move the character backward (based on the
//          direction they are facing) the specified distance.
//      ● turnLeft: change the direction by 90 degrees to the left.
//      ● turnRight: change the direction by 90 degrees to the right.
//      ● printLocation: logs the current position (N and E) to the console.
// Call the functions in the following order and check the results:
// 1. moveForward 5
// 2. turnRight
// 3. moveForward 2
// 4. printLocation … should print 5 N, 2 E
// 5. turnLeft
// 6. turnLeft
// 7. moveForward 7
// 8. turnRight
// 9. moveBackward 3
// 10. printLocation … should print 2 N, -5 E
// Wrap the whole program in an IIFE.

"use strict";
{


    // NOTES TO SELF
    // figure out how to do the directions functions by calling other functions (maybe with closures??)
    //
    // Ivan
    // check to see if i can do it with an array or object
    // look up the mars rover problem in JS


    let N = 0;
    let E = 0;
    let N_direction = 1;
    let E_direction = 0;

    // function moveForward(num) {
    //     N += (num * N_direction);
    //     E += (num * E_direction);
    // }

    // function moveBackward(num) {
    //     N -= (num * N_direction);
    //     E -= (num * E_direction);
    // }

    function move(num, direction) {
        if (direction === "forward") {
            N += (num * N_direction);
            E += (num * E_direction);
        } else if (direction === "backward") {
            N -= (num * N_direction);
            E -= (num * E_direction);
        }
    }

    // function turn(turnRL) {
    //     if (turnRL === "right") {
    //         N_direction
    //     } else if (turnRL === "left") {

    //     }
    // }


    function turnRight() {
        N_direction -= 1;
        if (N_direction > 1) {
            N_direction = 0;
        }
        if (N_direction <= -1) {
            N_direction = 1;
        }
        E_direction += 1;
        if (E_direction > 1) {
            E_direction = 0;
        }
    }

    function turnLeft() {
        N_direction += 1;
        if (N_direction > 1) {
            N_direction = 0;
        }
        E_direction -= 1;
        if (E_direction > 1) {
            E_direction = 0;
        }
    }

    function printLocation() {
        console.log(`${N}N ${E}E`);
    }


    const forward = "forward";
    const backward = "backward";

    move(5, forward);
    turnRight();
    move(2, forward);
    printLocation();
    turnLeft();
    turnLeft();
    move(7, forward);
    turnRight();
    move(3, backward);
    printLocation();

    // // // // // // // // // // // 
    // // // // Testing // // // // 
    // // // // // // // // // // // 
    //     console.log('Start:');
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 1: Move Forward 5');
    //     moveForward(5);
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 2: Turn Right');
    //     turnRight();
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 3: Move Forward 2');
    //     moveForward(2);
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 4: Turn Left');
    //     turnLeft();
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 4: Turn Left');
    //     turnLeft();
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 5: Move Forward 7');
    //     moveForward(7);
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 6: Turn Right');
    //     turnRight()
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);
    //     console.log('');
    //     console.log('STEP 7: Move Backward 3');
    //     moveBackward(3);
    //     console.log(`N is: ${N} N`);
    //     console.log(`E is: ${E} E`);
    //     console.log(`N_direction is: ${N_direction}`);
    //     console.log(`E_direction is: ${E_direction}`);


}