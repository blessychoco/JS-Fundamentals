#!/usr/bin/env node

function factorial(n) {
  // Convert to integer
  const num = parseInt(n);
  
  // If not a number, return 1
  if (isNaN(num)) {
    return 1;
  }
  
  // Base cases: 0! = 1 and 1! = 1
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Recursive case: n! = n × (n-1)!
  return num * factorial(num - 1);
}

// Get first argument from command line
const input = process.argv[2];

// Calculate and print result
console.log(factorial(input));
