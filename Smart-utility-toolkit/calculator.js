// calculator.js
// A simple CLI-based calculator using process.argv

// process.argv looks like:
// [0] node executable path
// [1] path to this script
// [2] operation  (add / sub / multiply / divide)
// [3] first number
// [4] second number
//
// Example: node calculator.js add 10 5

const args = process.argv;

const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

// Validate that we actually received enough arguments
if (!operation || args[3] === undefined || args[4] === undefined) {
  console.log('Usage: node calculator.js <add|sub|multiply|divide> <num1> <num2>');
  console.log('Example: node calculator.js add 10 5');
  process.exit(1); // exit with error code
}

// Validate that the numbers are actually numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Error: Please provide valid numbers.');
  process.exit(1);
}

let result;

switch (operation) {
  case 'add':
    result = num1 + num2;
    break;

  case 'sub':
    result = num1 - num2;
    break;

  case 'multiply':
    result = num1 * num2;
    break;

  case 'divide':
    if (num2 === 0) {
      console.log('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    result = num1 / num2;
    break;

  default:
    // Handle invalid/unsupported operation gracefully
    console.log(`Error: Unknown operation "${operation}".`);
    console.log('Supported operations: add, sub, multiply, divide');
    process.exit(1);
}

console.log(`Result: ${result}`);
