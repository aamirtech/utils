"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a random string consisting of alphabetic characters.
 * @param {number} length - The length of the output string.
 * @returns {string} - The randomly generated string containing alphabetic characters.
 */
function Alphabetic(length) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let otp = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * alphabet.length);
        otp += alphabet[index];
    }
    return otp;
}
exports.default = Alphabetic;
//# sourceMappingURL=alphabetic.js.map