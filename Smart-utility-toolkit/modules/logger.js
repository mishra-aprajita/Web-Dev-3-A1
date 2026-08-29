// modules/logger.js
// Custom logger module that prints messages with an ISO timestamp prefix

/**
 * Logs a message to the console with a timestamp
 * @param {string} message - the message to log
 */
function logMessage(message) {
  // new Date().toISOString() gives a standard ISO format timestamp
  // e.g. 2026-08-25T10:15:30.123Z
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

// Export the function for reuse in other files
module.exports = logMessage;
