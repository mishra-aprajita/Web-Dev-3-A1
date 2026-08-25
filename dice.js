// dice.js
// Random dice generator using the built-in 'crypto' module for secure randomness

const crypto = require('crypto');

/**
 * Rolls a 6-sided dice using crypto for randomness
 * @returns {number} a random integer between 1 and 6
 */
function rollDice() {
  // crypto.randomInt(min, max) returns a secure random integer
  // min is inclusive, max is exclusive -> so we use 1 to 7
  return crypto.randomInt(1, 7);
}

// Single dice roll
console.log('--- Single Dice Roll ---');
console.log(`Dice Rolled: ${rollDice()}`);

// Simulate multiple dice rolls using a loop
console.log('\n--- Simulating 5 Dice Rolls ---');
for (let i = 1; i <= 5; i++) {
  console.log(`Roll ${i}: Dice Rolled: ${rollDice()}`);
}
