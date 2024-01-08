/***

Write a JavaScript program that takes a day of the week as input (e.g., Monday, Tuesday, etc.) and checks if it's a weekday or a weekend day.

    - Do using if-else
    - replace if-else with ternary

 */

var dayOfWeek = 'Monday';
dayOfWeek = dayOfWeek.toLowerCase();

// Using if-else statement
if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
    console.log("It's a weekend day!");
} else if (dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "thursday" || dayOfWeek === "friday") {
    console.log("It's a weekday.");
} else {
    console.log("Invalid input. Please enter a valid day of the week.");
}


// replacing if-else with ternary
const result = (dayOfWeek === "saturday" || dayOfWeek === "sunday")
    ? "It's a weekend day!"
    : (dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "thursday" || dayOfWeek === "friday")
        ? "It's a weekday."
        : "Invalid input. Please enter a valid day of the week.";

console.log(result);
