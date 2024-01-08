/***

Write JavaScript code that takes an array of numbers as input and returns the maximum element in the array. Use a for loop to iterate through the array and compare each element to find the maximum.

 */

var numbers = [3, 7, 2, 10, 5, 8];

// Ensure that the array is not empty
if (numbers.length === 0) {
    console.log("Array is empty.");
}
else {
    // Initialize maxElement with the first element of the array
    var maxElement = numbers[0];

    // Use a for loop to iterate through the array
    for (let i = 1; i < numbers.length; i++) {
        // Compare each element with maxElement and update if larger
        if (numbers[i] > maxElement) {
            maxElement = numbers[i];
        }
    }
}

console.log(maxElement); // Output should be 10
