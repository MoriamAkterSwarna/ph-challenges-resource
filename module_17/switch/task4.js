/***

Create a simple menu system for a restaurant. The task is to take the user's choice (a number) for a menu item and use a switch statement to display the corresponding item and its price.

    ========
    Menu
    ========
    1. Burger - $5.99;
    2. Pizza - $8.99;
    3. Salad - $4.49;
    4. Pasta - $7.29;
    5. Soda - $1.99;

 */

// Display the menu options to the user.
console.log("Menu:");
console.log("1. Burger - $5.99");
console.log("2. Pizza - $8.99");
console.log("3. Salad - $4.49");
console.log("4. Pasta - $7.29");
console.log("5. Soda - $1.99");

let choice = 2;
let itemName, itemPrice;

switch (choice) {
    case 1:
        itemName = "Burger";
        itemPrice = 5.99;
        break;
    case 2:
        itemName = "Pizza";
        itemPrice = 8.99;
        break;
    case 3:
        itemName = "Salad";
        itemPrice = 4.49;
        break;
    case 4:
        itemName = "Pasta";
        itemPrice = 7.29;
        break;
    case 5:
        itemName = "Soda";
        itemPrice = 1.99;
        break;
    default:
        itemName = "Invalid choice";
        itemPrice = 0;
}

console.log('You selected: ' + itemName);
console.log('Price: $' + itemPrice);
