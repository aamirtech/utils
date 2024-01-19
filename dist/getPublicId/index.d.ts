/**
 * Generates a random public ID of the specified length.
 * @param {number} length - The length of the public ID.
 * @param {Object} options - The options for generating the public ID.
 * @param {boolean} options.numeric - Whether to include numeric characters in the public ID. Default is true.
 * @param {boolean} options.alphabetic - Whether to include alphabetic characters in the public ID. Default is true.
 * @returns {string} - The randomly generated public ID.
 */
declare function getPublicId(length: number, options?: {
    numeric?: boolean;
    alphabetic?: boolean;
}): string;
export default getPublicId;
//# sourceMappingURL=index.d.ts.map