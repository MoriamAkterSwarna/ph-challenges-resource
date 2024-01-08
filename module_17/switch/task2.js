/***

The task is to take a student's score as input and use a switch statement to determine the corresponding varter grade based on the following criteria:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

 */

var score = 85;
var grade;

switch (true) {
    case score >= 90 && score <= 100:
        grade = 'A';
        break;
    case score >= 80 && score < 90:
        grade = 'B';
        break;
    case score >= 70 && score < 80:
        grade = 'C';
        break;
    case score >= 60 && score < 70:
        grade = 'D';
        break;
    case score >= 0 && score < 60:
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log(grade);
