"use strict";
/**
 * Generates a random public ID of the specified length.
 * @param {number} length - The length of the public ID (minimum 6 to ensure uniqueness).
 * @param {boolean} numeric - Whether to include numeric characters in the public ID. Default is true.
 * @param {boolean} alphabetic - Whether to include alphabetic characters in the public ID. Default is true.
 * @returns {string} - The randomly generated public ID.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const getPublicId = (length = 6, { numeric, alphabetic } = {}) => {
    if (length < 6) {
        throw new Error("The length of the public ID cannot be less than 6 to ensure uniqueness.");
    }
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
            if (alphabetic) {
                otp += getRandomChar(alphabets);
                countAlpha++;
            }
            else {
                otp += getRandomChar(numbers);
                countNum++;
            }
        }
        else {
            if (numeric) {
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
};
exports.default = getPublicId;
//# sourceMappingURL=getPublicId.js.map