/***

Shopping Discount Calculator

Create a JavaScript program that calculates the final price of items in a shopping cart, considering discounts based on the total purchase amount. Use nested if-else statements to determine the applicable discount.

    - 10% discount for totalAmount >= 50
    - 20% discount for totalAmount >= 100

*/

const totalPurchaseAmount = 120;
const discountRate1 = 0.1; // 10% discount for totalAmount >= 50
const discountRate2 = 0.2; // 20% discount for totalAmount >= 100

if (totalAmount < 0) {
    console.log("Invalid total amount. Please enter a valid amount.");
}

else if (totalAmount < 50) {
    // No discount for totalAmount < 50
    console.log('The final price is ' + totalAmount + ' No discount applied.');
}

else if (totalAmount < 100) {
    // Apply a 10% discount for totalAmount >= 50 and < 100
    const discountedPrice = totalAmount - (totalAmount * discountRate1);
    console.log('The final price is ' + discountedPrice.toFixed(2) + ' with a 10% discount.');
}

else {
    // Apply a 20% discount for totalAmount >= 100
    const discountedPrice = totalAmount - (totalAmount * discountRate2);
    console.log('The final price is ' + discountedPrice.toFixed(2) + ' with a 20% discount.');
}
