/***

Write a JavaScript program that takes a number as input and checks if it is even or odd. If the number is even, the program should print "The number is even." If the number is odd, the program should print "The number is odd."

    - Do using if-else
    - replace if-else with ternary

 */

let number = 55.66;

// Using if-else statement
number = parseInt(number);

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// replacing if-else with ternary
number = parseInt(number);

const result = number % 2 === 0 ? "The number is even." : "The number is odd.";
console.log(result);

