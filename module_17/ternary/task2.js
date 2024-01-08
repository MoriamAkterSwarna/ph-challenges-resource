/***

Write a JavaScript program that takes two numbers as input and checks if they are equal or not.

    - Do using if-else
    - replace if-else with ternary

 */

var num1 = 55;
var num2 = 65;

// Using if-else statement
if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 === num2) {
        console.log("The numbers are equal.");
    } else {
        console.log("The numbers are not equal.");
    }
} else {
    console.log("Invalid input. Please enter valid numbers.");
}

// replacing if-else with ternary
const result = (!isNaN(num1) && !isNaN(num2))
    ? (num1 === num2
        ? "The numbers are equal."
        : "The numbers are not equal.")
    : "Invalid input. Please enter valid numbers.";

console.log(result);
