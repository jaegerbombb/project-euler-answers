/* 

Problem 2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/


// Add previous number and current value

var term1 = 1;
var term2 = 2;
var newTerm = 0;
var sumOfEvens = 0;

for (newTerm=0; newTerm<4000000;) {
  // RULE
  // Add the previous two numbers
  // How?
  // Store a variable for each number
  // Add these together to get next number
  // Store this as a variable

  // ORDER?
  // For each number in sequence we need to check if it's even
  // If so we need to add the value

  
  
  newTerm = term1 + term2;

  console.log("term1: " + term1 + " term2: " + term2 + " newTerm: " + newTerm);

  if ( newTerm % 2 == 0) {
    sumOfEvens += newTerm;
  }
  

  term1 = term2;
  term2 = newTerm;


  // Even values only (if % 2 == 0 {....})
}

sumOfEvens += 2;
console.log(sumOfEvens);