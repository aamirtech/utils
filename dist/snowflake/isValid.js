"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snowflake_1 = require("./snowflake");
/**
 * Validates a Snowflake ID.
 * @param {string} snowflake - The Snowflake ID to validate.
 * @returns {boolean} - Returns true if the Snowflake ID is valid, otherwise false.
 */
function isValid(snowflake) {
    const regex = /^\d+$/;
    if (!regex.test(snowflake)) {
        return false; // Not a valid numeric string
    }
    if (snowflake.length !== 19) {
        return false; // Snowflake ID length is not appropriate
    }
    const id = BigInt(snowflake);
    const timestamp = Number(id >> BigInt(22)) + snowflake_1.Snowflake.epoch;
    const sequence = Number(id & BigInt(4095));
    const currentTimestamp = Date.now();
    if (timestamp > currentTimestamp ||
        timestamp <= 0 ||
        sequence < 0 ||
        sequence > 4095) {
        return false; // Invalid Snowflake ID
    }
    // All checks passed, indicating a valid Snowflake ID
    return true;
}
exports.default = isValid;
//# sourceMappingURL=isValid.js.map