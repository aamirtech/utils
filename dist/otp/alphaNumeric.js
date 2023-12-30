"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a random alphanumeric string.
 * @param {number} length - The length of the output string.
 * @returns {string} - The randomly generated alphanumeric string.
 */
function AlphaNumeric(length) {
    const minLengthAlpha = Math.ceil(length * 0.5);
    const minLengthNum = length - minLengthAlpha;
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
            otp += getRandomChar(alphabets);
            countAlpha++;
        }
        else {
            otp += getRandomChar(numbers);
            countNum++;
        }
    }
    const shuffledOTP = otp
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    return shuffledOTP;
}
exports.default = AlphaNumeric;
//# sourceMappingURL=alphaNumeric.js.map