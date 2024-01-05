/***

Temperature Converter

Create a simple JavaScript program that converts temperatures between Celsius and Fahrenheit. Use nested if-else statements to determine the conversion based on user input.

 */

const value = 25;
const unit = "C"; // "C" for Celsius, "F" for Fahrenheit

if (unit === "C") {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (value * 9 / 5) + 32;
    console.log(value + ' °C is equal to ' + fahrenheit.toFixed(2) + '°F.');

} else if (unit === "F") {
    // Convert Fahrenheit to Celsius
    const celsius = (value - 32) * 5 / 9;
    console.log(value + ' °F is equal to ' + celsius.toFixed(2) + '°C.');

} else {
    console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
}

