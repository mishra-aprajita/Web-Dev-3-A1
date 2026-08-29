// modules/isEven.js
// Custom module that checks whether a given number is even or odd

/**
 * Checks if a number is even
 * @param {number} num - the number to check
 * @returns {boolean} true if even, false if odd
 */
function isEven(num) {
  // % is the modulus operator - gives the remainder after division
  return num % 2 === 0;
}

// Export the function so it can be reused in other files via require()
module.exports = isEven;
