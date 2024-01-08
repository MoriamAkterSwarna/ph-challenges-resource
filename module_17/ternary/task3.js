/***

Write a JavaScript program that takes three numbers as input and finds the largest among them.

    - Do using if-else
    - replace if-else with ternary

 */

var num1 = 15;
var num2 = 17;
var num3 = 8;

// Using if-else statement
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}


// replacing if-else with ternary
const largestNumber = num1 >= num2 && num1 >= num3
    ? num1
    : num2 >= num1 && num2 >= num3
        ? num2
        : num3;
console.log("The largest number is: " + largestNumber);
