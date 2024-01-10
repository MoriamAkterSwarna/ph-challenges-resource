/***
Consider a scenario When you need to get user input and validate it, a do-while loop can be useful to repeatedly prompt the user until valid input is provided.
 */


// You can do this code in browser console


let userInput;

do {
    userInput = prompt("Please enter a valid number:");
} while (isNaN(userInput));
