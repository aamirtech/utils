import { describe, expect, it } from "bun:test";
import { Otp } from "../src/index";

describe("Otp", () => {
  describe("generateNumeric()", () => {
    it("should generate a generateNumeric OTP of specified length", () => {
      const length = 6; // Change the desired length
      const result = Otp.generateNumeric(length);
      expect(result).toBeNumber();
      expect(result.toString()).toHaveLength(length);
    });

    it("should generate a generateNumeric OTP within the correct range", () => {
      const length = 6; // Change the desired length
      const result = Otp.generateNumeric(length);
      const smallest = Math.pow(10, length - 1);
      const largest = Math.pow(10, length) - 1;
      expect(result).toBeGreaterThanOrEqual(smallest);
      expect(result).toBeLessThanOrEqual(largest);
    });
  });

  describe("generateAlphabetic()", () => {
    it("should generate an generateAlphabetic OTP of specified length", () => {
      const length = 6; // Change the desired length
      const result = Otp.generateAlphabetic(length);
      expect(result).toBeString();
      expect(result).toMatch(/^[A-Z]+$/);
      expect(result).toHaveLength(length);
    });
  });

  describe("generateAlphaNumeric()", () => {
    it("should generate an generateAlphaNumeric OTP of specified length", () => {
      const length = 8; // Change the desired length
      const result = Otp.generateAlphaNumeric(length);
      expect(result).toBeString();
      expect(result).toMatch(/^[A-Z0-9]+$/);
      expect(result).toHaveLength(length);
    });

    it("should have at least 50% generateAlphabetic characters", () => {
      const length = 10; // Change the desired length
      const result = Otp.generateAlphaNumeric(length);
      const alphaCount = (result.match(/[A-Z]/g) || []).length;
      expect(alphaCount / length).toBeGreaterThanOrEqual(0.5);
    });

    it("should have at least 50% generateNumeric characters", () => {
      const length = 10; // Change the desired length
      const result = Otp.generateAlphaNumeric(length);
      const numCount = (result.match(/[0-9]/g) || []).length;
      expect(numCount / length).toBeGreaterThanOrEqual(0.5);
    });
  });
});
