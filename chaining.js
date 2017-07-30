console.log("testing 1 2 3");
/*
Using one single line of JavaScript code, complete the following tasks on the array of integers below.

Sort the numbers in descending order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output (either in the DOM or the console) the sum of all the resulting numbers.
*/

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
 
/* using intergers array with the below methods(.sort, .filter, etc) */
let chain = integers
/* need to sort to get #s in correct order. sort in descending order & RETURN the value. */
.sort((a, b) => {return b-a}) 
/* remove intergers greater than 19. hacks them off and RETURNS the value. */
.filter((num) => {return num < 19})
/* .map returns a new array, not the original */
.map((num) => {return (num * 1.5) - 1}) 
/* reduce array to a single value */
.reduce((previous, current) => {return previous + current});

console.log("Result of sum: ", chain);

//let chain = integers.sort((a, b) => {return b-a}).filter((num) => {return num < 19}).map((num) => {return (num * 1.5)- 1}).reduce((previous, current) => {return previous + current});