import { describe, expect, it } from "bun:test";
import { Snowflake } from "../src/index";

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
});
