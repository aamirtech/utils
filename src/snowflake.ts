export class Snowflake {
  static epoch = 1028592000; // Epoch timestamp
  static sequence = 0;
  static timestamp = -1;

  static generate() {
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
  static isValid(snowflake: string) {
    const regex = /^\d+$/;

    if (!regex.test(snowflake)) {
      return false; // Not a valid numeric string
    }

    if (snowflake.length !== 19) {
      return false; // Snowflake ID length is not appropriate
    }

    const id = BigInt(snowflake);
    const timestamp = Number(id >> BigInt(22)) + Snowflake.epoch;
    const sequence = Number(id & BigInt(4095));

    const currentTimestamp = Date.now();

    if (
      timestamp > currentTimestamp ||
      timestamp <= 0 ||
      sequence < 0 ||
      sequence > 4095
    ) {
      return false; // Invalid Snowflake ID
    }

    // All checks passed, indicating a valid Snowflake ID
    return true;
  }
}
