/***

You are developing a student grading system for a school, and you need to write a js code that analyzes the grades of a class and provides insights into the overall class performance.

Here's a brief description of what tasks you should do:

    - Student grades array: const grades = [85, 90, 75, 92, 88]
    - Display the properties:
        average: representing the average grade of the class.
        highest: representing the highest grade achieved by any student.
        lowest: representing the lowest grade received by any student.
 */

const grades = [85, 90, 75, 92, 88];
// Output should be "Class Grade Analysis: { average: 86, highest: 92, lowest: 75 }"

if (!grades || grades.length === 0) {
    // Return an object with default values if the input array is empty or undefined
    console.log('average: ', 0, ' highest: ', undefined, ' lowest: ', undefined);
}

let sum = 0;
let highest = grades[0];
let lowest = grades[0];

// Calculate the sum and find the highest and lowest grades using a for loop
for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    // Update sum
    sum += grade;

    // Update highest grade
    if (grade > highest) {
        highest = grade;
    }

    // Update lowest grade
    if (grade < lowest) {
        lowest = grade;
    }
}

// Calculate the average grade
const average = sum / grades.length;

console.log('average: ', average, ' highest: ', highest, ' lowest: ', lowest);



