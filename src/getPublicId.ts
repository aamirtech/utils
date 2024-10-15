/**
 * Generates a random public ID of specified length, optionally including
 * numeric and/or alphabetic characters.
 *
 * @param {number} [length=6] - The length of the public ID (minimum 6).
 * @param {Object} [options={}] - Options for character types.
 * @param {boolean} [options.numeric=true] - Include numeric characters.
 * @param {boolean} [options.alphabetic=true] - Include alphabetic characters.
 * @returns {string} The generated public ID.
 *
 * @example
 * getPublicId(10, { numeric: true, alphabetic: false }); // returns a 10-digit numeric ID
 */

export const getPublicId = (
  length: number = 6,
  { numeric, alphabetic }: { numeric?: boolean; alphabetic?: boolean } = {}
): string => {
  if (typeof alphabetic === "undefined" && typeof numeric === "undefined") {
    alphabetic = true;
    numeric = true;
  }

  if (alphabetic === undefined || numeric === undefined) {
    if (typeof numeric === "undefined" && !alphabetic) {
      alphabetic = false;
      numeric = true;
    }

    if (typeof alphabetic === "undefined" && !numeric) {
      alphabetic = true;
      numeric = false;
    }
  }

  const minLengthAlpha = alphabetic ? Math.ceil(length * 0.5) : 0;
  const minLengthNum = numeric ? length - minLengthAlpha : length;

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  /**
   * Generates a random character from the given set of characters.
   * @param {string} characters - The set of characters to choose from.
   * @returns {string} - The randomly selected character.
   */
  const getRandomChar = (characters: string) => {
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
  };

  let otp = "";

  let countAlpha = 0;
  let countNum = 0;

  for (let i = 0; i < length; i++) {
    if (
      (countAlpha < minLengthAlpha || countNum >= minLengthNum) &&
      countAlpha < length * 0.8
    ) {
      if (alphabetic) {
        otp += getRandomChar(alphabets);
        countAlpha++;
      } else {
        otp += getRandomChar(numbers);
        countNum++;
      }
    } else {
      if (numeric) {
        otp += getRandomChar(numbers);
        countNum++;
      } else {
        otp += getRandomChar(alphabets);
        countAlpha++;
      }
    }
  }

  const shuffledOTP = otp
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return shuffledOTP;
};
