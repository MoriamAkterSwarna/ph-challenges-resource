/***

Ticket Price Calculator

Create a JavaScript program that calculates the ticket price for a movie theater based on the age and whether the customer is a student or not. Use nested if-else statements to determine the ticket price.

    - Children (age < 12) and senior citizens (age >= 60) get a discount
    - Students get a discount as well
    - Base price for a regular ticket 10tk

*/

const age = 25;
const student = false;

const basePrice = 10;

if (age < 0 || age > 120) {
    return "Invalid age. Please give a valid age.";
}

if (age < 12 || age >= 60) {
    // Children (age < 12) and senior citizens (age >= 60) get a discount
    const discountedPrice = basePrice - 2;
    console.log('The ticket price is ' + discountedPrice);

} else if (student) {
    // Students get a discount as well
    const studentDiscountPrice = basePrice - 3;
    console.log('The ticket price is ' + studentDiscountPrice);

} else {
    // Regular adult ticket
    console.log('The ticket price is ' + basePrice);
}

