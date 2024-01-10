/***
Consider a scenario where users are presented with a menu and need to make a choice, a do-while loop ensures that the menu is displayed at least once, and the program continues to execute until the user chooses to exit.
 */


// You can do this code in browser console

let choice;

do {
    // Display menu
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Exit");

    // Get user choice
    choice = parseInt(prompt("Enter your choice:"));

    // Process choice
    switch (choice) {
        case 1:
            console.log("Executing Option 1");
            break;
        case 2:
            console.log("Executing Option 2");
            break;
    }
} while (choice !== 3);

