import { describe, expect, it } from "bun:test";
import { Id } from "../src/index";

describe("Snowflake", () => {
  describe("generate()", () => {
    it("should generate a string", () => {
      const result = Id.Snowflake();
      expect(result).toBeString();
    });

    it("should generate a string with length 19", () => {
      const result = Id.Snowflake();
      expect(result).toHaveLength(19);
    });
  });

  describe("isValid()", () => {
    it("should return true for a valid Snowflake ID", () => {
      const validSnowflake = Id.Snowflake();
      const result = Id.IsValidSnowflake(validSnowflake);
      expect(result).toBe(true);
    });

    it("should return false for an invalid Snowflake ID", () => {
      const invalidSnowflake = "123"; // Replace this with an invalid Snowflake ID
      const result = Id.IsValidSnowflake(invalidSnowflake);
      expect(result).toBe(false);
    });

    describe("isValid()", () => {
      it("should return false for non-numeric input", () => {
        const nonNumericSnowflake = "abcdefg"; // Non-numeric input
        const result = Id.IsValidSnowflake(nonNumericSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for empty input", () => {
        const emptySnowflake = ""; // Empty input
        const result = Id.IsValidSnowflake(emptySnowflake);
        expect(result).toBe(false);
      });

      it("should return false for a shorter Snowflake ID", () => {
        const shortSnowflake = "12345678901234567"; // Shorter than 19 characters
        const result = Id.IsValidSnowflake(shortSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for a longer Snowflake ID", () => {
        const longSnowflake = "12345678901234567890"; // Longer than 19 characters
        const result = Id.IsValidSnowflake(longSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for future-dated timestamp", () => {
        const futureSnowflake = "9999999999999999999"; // Replace this with a future-dated Snowflake ID
        const result = Id.IsValidSnowflake(futureSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for negative sequence number", () => {
        const negativeSeqSnowflake = "100000000000000000-1"; // Snowflake ID with negative sequence number
        const result = Id.IsValidSnowflake(negativeSeqSnowflake);
        expect(result).toBe(false);
      });

      it("should return false for sequence number out of range", () => {
        const outOfRangeSeqSnowflake = "10000000000000000000"; // Snowflake ID with sequence number out of range
        const result = Id.IsValidSnowflake(outOfRangeSeqSnowflake);
        expect(result).toBe(false);
      });
    });
  });
});
