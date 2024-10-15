/**
 * Generates a random public ID of the specified length.
 * @param {number} length - The length of the public ID (minimum 6 to ensure uniqueness).
 * @param {boolean} numeric - Whether to include numeric characters in the public ID. Default is true.
 * @param {boolean} alphabetic - Whether to include alphabetic characters in the public ID. Default is true.
 * @returns {string} - The randomly generated public ID.
 */
declare const getPublicId: (length?: number, { numeric, alphabetic }?: {
    numeric?: boolean;
    alphabetic?: boolean;
}) => string;
export default getPublicId;
