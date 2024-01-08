/***

Create a basic calculator that performs addition, subtraction, multiplication, or division based on the input.

*/

var num1 = 25;
var num2 = 10
var operation = '+' //Enter the operation (+, -, *, /);
var result;

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
