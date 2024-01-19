"use strict";
/**
 * Generates a random public ID of the specified length.
 * @param {number} length - The length of the public ID.
 * @param {Object} options - The options for generating the public ID.
 * @param {boolean} options.numeric - Whether to include numeric characters in the public ID. Default is true.
 * @param {boolean} options.alphabetic - Whether to include alphabetic characters in the public ID. Default is true.
 * @returns {string} - The randomly generated public ID.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getPublicId(length, options) {
    options = options || { alphabetic: true, numeric: true };
    const minLengthAlpha = options.alphabetic ? Math.ceil(length * 0.5) : 0;
    const minLengthNum = options.numeric ? length - minLengthAlpha : length;
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    /**
     * Generates a random character from the given set of characters.
     * @param {string} characters - The set of characters to choose from.
     * @returns {string} - The randomly selected character.
     */
    const getRandomChar = (characters) => {
        const index = Math.floor(Math.random() * characters.length);
        return characters[index];
    };
    let otp = "";
    let countAlpha = 0;
    let countNum = 0;
    for (let i = 0; i < length; i++) {
        if ((countAlpha < minLengthAlpha || countNum >= minLengthNum) &&
            countAlpha < length * 0.8) {
            if (options.alphabetic) {
                otp += getRandomChar(alphabets);
                countAlpha++;
            }
            else {
                otp += getRandomChar(numbers);
                countNum++;
            }
        }
        else {
            if (options.numeric) {
                otp += getRandomChar(numbers);
                countNum++;
            }
            else {
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
}
exports.default = getPublicId;
//# sourceMappingURL=index.js.map