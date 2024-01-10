/***
Consider a scenario where you want to prompt the user for input at least once and then continue based on whether they want to continue providing input. 
 */


// You can do this code in browser console

let condition = false;

do {
    // Prompt the user for input
    let userInput = prompt("Enter something:");

    // Process the input
    console.log("You entered:", userInput);

    // Update condition based on some logic (e.g., ask the user if they want to continue)
    let userResponse = prompt("Do you want to continue? (yes/no)").toLowerCase();
    condition = userResponse === "yes";

} while (condition);

console.log("Exiting the loop. Thank you!");
