import { Snowflake } from "./snowflake";

/**
 * Generates a Snowflake ID.
 * @returns {string} - The generated Snowflake ID.
 */
export default function generate(): string {
  let currentTimestamp = Date.now() - Snowflake.epoch;

  if (currentTimestamp === Snowflake.timestamp) {
    Snowflake.sequence = (Snowflake.sequence + 1) & 4095; // 4095 is the max value for 12 bits
    if (Snowflake.sequence === 0) {
      while (Date.now() <= currentTimestamp) {}
      currentTimestamp = Date.now() - Snowflake.epoch;
    }
  } else {
    Snowflake.sequence = 0;
  }

  Snowflake.timestamp = currentTimestamp;

  const id =
    (BigInt(currentTimestamp) << BigInt(22)) | BigInt(Snowflake.sequence);

  return id.toString();
}
