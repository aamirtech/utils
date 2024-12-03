let timestamp = -1;
let sequence = 0;
const epoch = 0;

/**
 * Generates a Snowflake ID.
 * @returns {string} The generated Snowflake ID.
 * @example Snowflake.generate(); // 7133860161289977856
 */

function generate(node = 0) {
  let currentTimestamp = Date.now();
  if (currentTimestamp === timestamp) {
    sequence = (sequence + 1) & 0xfff;
    if (sequence === 0) {
      while (currentTimestamp <= timestamp) {
        currentTimestamp = Date.now();
      }
    }
  } else {
    sequence = 0;
  }

  timestamp = currentTimestamp;
  const snowflake =
    (BigInt(currentTimestamp - epoch) << 22n) |
    (BigInt(node) << 12n) |
    BigInt(sequence);

  return snowflake.toString();
}

export const Snowflake = {
  generate,
};
