import { describe, expect, it } from "bun:test";
import getPublicId from "../src/getPublicId";

describe("getPublicId", () => {
  describe("with default options", () => {
    it("should generate a public ID of specified length", () => {
      const result = getPublicId();
      expect(result).toBeString();
      expect(result).toHaveLength(6);
    });

    it("should contain alphabetic and numeric characters", () => {
      const length = 10; // Change the desired length
      const result = getPublicId({ length });
      expect(result).toMatch(/^[A-Z0-9]+$/);
      expect(result).toHaveLength(length);
    });
  });

  describe("with alphabetic option only", () => {
    it("should generate a public ID with only alphabetic characters", () => {
      const length = 10; // Change the desired length
      const result = getPublicId({ length, alphabetic: true });
      expect(result).toBeString();
      expect(result).toMatch(/^[A-Z]+$/);
      expect(result).toHaveLength(length);
    });
  });

  describe("with numeric option only", () => {
    it("should generate a public ID with only numeric characters", () => {
      const length = 10; // Change the desired length
      const result = getPublicId({ length, numeric: true });
      expect(result).toBeString();
      expect(result).toMatch(/^[0-9]+$/);
      expect(result).toHaveLength(length);
    });
  });

  describe("with custom options", () => {
    it("should generate a public ID with specified length and character types", () => {
      const length = 10; // Change the desired length
      const result = getPublicId({ length });
      expect(result).toBeString();
      expect(result).toMatch(/^[A-Z0-9]+$/);
      expect(result).toHaveLength(length);
    });
  });
});
