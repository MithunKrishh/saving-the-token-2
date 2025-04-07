// script.js
const jwt = require('jsonwebtoken');
/**
 * Generates a JWT with an expiry time.
 * @param {Object} payload - The data you want to include in the token.
 * @param {string} secret - Your secret key to sign the token.
 * @returns {string} - The generated JWT.
 */
const encrypt = (payload, secret) => {
  // Create and return the token with an expiration time (e.g., 1 hour)
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

module.exports = encrypt;
