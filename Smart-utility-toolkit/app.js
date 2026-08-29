// app.js
// Demonstrates reusing the custom isEven and logger modules

// require() is used to import our custom modules using relative paths
const isEven = require('./modules/isEven');
const log = require('./modules/logger');

// Run: node app.js

log('Starting isEven module test...');

// Array of test numbers to check
const numbers = [2, 7, 10, 15, 0, -4, 33];

numbers.forEach((num) => {
  const result = isEven(num);
  // Log each result using our custom logger (with timestamp)
  log(`Number ${num} is ${result ? 'Even' : 'Odd'}`);
});

log('isEven module test completed.');
