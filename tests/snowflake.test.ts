import { describe, expect, it } from "bun:test";
import { Snowflake } from "../src/snowflake";

describe("Snowflake", () => {
  describe("generate()", () => {
    it("should generate a string", () => {
      const result = Snowflake.generate();
      expect(result).toBeString();
    });

    it("should generate a string with length 19", () => {
      const result = Snowflake.generate();
      expect(result).toHaveLength(19);
    });
  });

  describe("isValid()", () => {
    it("should return true for a valid Snowflake ID", () => {
      const validSnowflake = Snowflake.generate();
      const result = Snowflake.isValid(validSnowflake);
      expect(result).toBe(true);
    });

    it("should return false for an invalid Snowflake ID", () => {
      const invalidSnowflake = "123"; // Replace this with an invalid Snowflake ID
      const result = Snowflake.isValid(invalidSnowflake);
      expect(result).toBe(false);
    });

    describe("isValid()", () => {
      it("should return false for non-numeric input", () => {
        const nonNumericSnowflake = "abcdefg"; // Non-numeric input
        const result = Snowflake.isValid(nonNumericSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for empty input", () => {
        const emptySnowflake = ""; // Empty input
        const result = Snowflake.isValid(emptySnowflake);
        expect(result).toBe(false);
      });

      it("should return false for a shorter Snowflake ID", () => {
        const shortSnowflake = "12345678901234567"; // Shorter than 19 characters
        const result = Snowflake.isValid(shortSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for a longer Snowflake ID", () => {
        const longSnowflake = "12345678901234567890"; // Longer than 19 characters
        const result = Snowflake.isValid(longSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for future-dated timestamp", () => {
        const futureSnowflake = "9999999999999999999"; // Replace this with a future-dated Snowflake ID
        const result = Snowflake.isValid(futureSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for negative sequence number", () => {
        const negativeSeqSnowflake = "100000000000000000-1"; // Snowflake ID with negative sequence number
        const result = Snowflake.isValid(negativeSeqSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for sequence number out of range", () => {
        const outOfRangeSeqSnowflake = "10000000000000000000"; // Snowflake ID with sequence number out of range
        const result = Snowflake.isValid(outOfRangeSeqSnowflake);
        expect(result).toBe(false);
      });
    });
  });
});
