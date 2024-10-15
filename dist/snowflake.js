"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const epoch = 0;
let sequence = 0;
let timestamp = -1;
/**
 * Generates a Snowflake ID.
 * @returns {string} - The generated Snowflake ID.
 * @example Snowflake.generate(); // 7133860161289977856
 */
function generate() {
    let currentTimestamp = Date.now() - epoch;
    if (currentTimestamp === timestamp) {
        sequence = (sequence + 1) & 4095; // 4095 is the max value for 12 bits
        if (sequence === 0) {
            while (Date.now() <= currentTimestamp) { }
            currentTimestamp = Date.now() - epoch;
        }
    }
    else {
        sequence = 0;
    }
    timestamp = currentTimestamp;
    const id = (BigInt(currentTimestamp) << BigInt(22)) | BigInt(sequence);
    return id.toString();
}
exports.generate = generate;
//# sourceMappingURL=snowflake.js.map