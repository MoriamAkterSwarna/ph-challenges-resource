/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var score = 85;

// Use nested if-else statements to determine the grade
if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score < 90) {
    console.log("B");
} else if (score >= 70 && score < 80) {
    console.log("C");
} else if (score >= 60 && score < 70) {
    console.log("D");
} else if (score >= 0 && score < 60) {
    console.log("F");
} else {
    console.log("Invalid score. Please give a score between 0 and 100.");
}
