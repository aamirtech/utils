"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snowflake_1 = require("./snowflake");
/**
 * Generates a Snowflake ID.
 * @returns {string} - The generated Snowflake ID.
 */
function generate() {
    let currentTimestamp = Date.now() - snowflake_1.Snowflake.epoch;
    if (currentTimestamp === snowflake_1.Snowflake.timestamp) {
        snowflake_1.Snowflake.sequence = (snowflake_1.Snowflake.sequence + 1) & 4095; // 4095 is the max value for 12 bits
        if (snowflake_1.Snowflake.sequence === 0) {
            while (Date.now() <= currentTimestamp) { }
            currentTimestamp = Date.now() - snowflake_1.Snowflake.epoch;
        }
    }
    else {
        snowflake_1.Snowflake.sequence = 0;
    }
    snowflake_1.Snowflake.timestamp = currentTimestamp;
    const id = (BigInt(currentTimestamp) << BigInt(22)) | BigInt(snowflake_1.Snowflake.sequence);
    return id.toString();
}
exports.default = generate;
//# sourceMappingURL=generate.js.map