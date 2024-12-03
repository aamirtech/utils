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
  alphabetic =
    typeof alphabetic === "undefined" && numeric
      ? false
      : typeof alphabetic === "undefined" && !numeric
      ? true
      : !!alphabetic;

  numeric =
    typeof numeric === "undefined" && alphabetic
      ? false
      : typeof numeric === "undefined" && !alphabetic
      ? true
      : !!numeric;

  let result = "";
  let characters = "";

  if (numeric) characters += "0123456789";
  if (alphabetic) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!characters) characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
};
