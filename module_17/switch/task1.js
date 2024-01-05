/***

Create a simple traffic light simulator. The user will input the color of the traffic light, and using a switch statement, the program will provide information about whether it's safe to proceed or stop.

 */

let trafficLightColor = 'Green'.toLowerCase();
let action;

switch (trafficLightColor) {
    case 'red':
        action = 'Stop! The light is red.';
        break;
    case 'yellow':
        action = 'Slow down. The light is yellow.';
        break;
    case 'green':
        action = 'You can proceed. The light is green.';
        break;
    default:
        action = 'Invalid traffic light color.';
}

console.log(action);
