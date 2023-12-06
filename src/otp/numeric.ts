/**
 * Generates a random numeric value within a specified length range.
 * @param {number} length - The length of the numeric output.
 * @returns {number} - The randomly generated numeric value.
 */
function generateNumeric(length) {
  const smallest = Math.pow(10, length - 1);
  const largest = Math.pow(10, length) - 1;

  const otp = Math.floor(Math.random() * (largest - smallest + 1) + smallest);
  return otp;
}

export default generateNumeric;
