/***

Subtask-1:

Now Ersa has entered into learned stage-2. She can calculate the sum of numbers. Now tell Ersa to display sum of all the numbers from 1 to 100.

 */

var sum = 0;
var n = 100

for (var i = 1; i <= n; i++) {
    sum += i;
}

console.log('sum:', sum);

/***

Subtask-2:

Now tell Ersa to display sum of all the odd numbers from 1 to 100.

 */

var sum = 0;
var n = 100

for (var i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
}

console.log('sum:', sum);

/***

Subtask-3:

Now tell Ersa to display sum of all the even numbers from 1 to 100.

 */

var sum = 0;
var n = 100

for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}

console.log('sum:', sum);

/***

Subtask-4:

Find sum of the even numbers in the given array

var numberArray = [11, 2, 13, 44, 5, 66, 72, 87, 99, 10];

 */