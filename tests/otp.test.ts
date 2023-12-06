import { describe, expect, it } from "bun:test";
import { Otp } from "../src/otp";

describe("Otp", () => {
  describe("numeric()", () => {
    it("should generate a numeric OTP of specified length", () => {
      const length = 6; // Change the desired length
      const result = Otp.numeric(length);
      expect(result).toBeNumber();
      expect(result.toString()).toHaveLength(length);
    });

    it("should generate a numeric OTP within the correct range", () => {
      const length = 6; // Change the desired length
      const result = Otp.numeric(length);
      const smallest = Math.pow(10, length - 1);
      const largest = Math.pow(10, length) - 1;
      expect(result).toBeGreaterThanOrEqual(smallest);
      expect(result).toBeLessThanOrEqual(largest);
    });
  });

  describe("alphabetic()", () => {
    it("should generate an alphabetic OTP of specified length", () => {
      const length = 6; // Change the desired length
      const result = Otp.alphabetic(length);
      expect(result).toBeString();
      expect(result).toMatch(/^[A-Z]+$/);
      expect(result).toHaveLength(length);
    });
  });

  describe("alphaNumeric()", () => {
    it("should generate an alphanumeric OTP of specified length", () => {
      const length = 8; // Change the desired length
      const result = Otp.alphaNumeric(length);
      expect(result).toBeString();
      expect(result).toMatch(/^[A-Z0-9]+$/);
      expect(result).toHaveLength(length);
    });

    it("should have at least 50% alphabetic characters", () => {
      const length = 10; // Change the desired length
      const result = Otp.alphaNumeric(length);
      const alphaCount = (result.match(/[A-Z]/g) || []).length;
      expect(alphaCount / length).toBeGreaterThanOrEqual(0.5);
    });

    it("should have at least 50% numeric characters", () => {
      const length = 10; // Change the desired length
      const result = Otp.alphaNumeric(length);
      const numCount = (result.match(/[0-9]/g) || []).length;
      expect(numCount / length).toBeGreaterThanOrEqual(0.5);
    });
  });
});
