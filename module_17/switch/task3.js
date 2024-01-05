/***

Create a basic calculator that performs addition, subtraction, multiplication, or division based on the input.

*/

let num1 = 25;
let num2 = 10
let operation = '+' //Enter the operation (+, -, *, /);
let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        // Check for division by zero.
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero!";
        }
        break;
    default:
        result = "Invalid operation!";
}

console.log(result);
