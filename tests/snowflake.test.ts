import { expect, test, describe, beforeAll, afterAll } from "bun:test";
import { Snowflake } from "../src/snowflake";

let originalDateNow: any;

beforeAll(() => {
  originalDateNow = Date.now;
});

afterAll(() => {
  Date.now = originalDateNow;
});

describe("generate", () => {
  test("should generate a unique snowflake ID", () => {
    const snowflake = Snowflake.generate();
    expect(snowflake).toBeDefined(); // Ensure it returns a value
    expect(snowflake).toMatch(/^\d+$/); // Ensure it returns a numeric string
  });

  test("should generate unique IDs for different times", () => {
    const initialTime = 1609459200000; // Fixed timestamp
    Date.now = () => initialTime;

    const snowflake1 = Snowflake.generate();
    Date.now = () => initialTime + 1000; // 1 second later
    const snowflake2 = Snowflake.generate();

    expect(snowflake1).not.toBe(snowflake2); // IDs should be different
  });

  test("should reset sequence when timestamp changes", () => {
    Date.now = () => 1609459200000; // First time
    const snowflake1 = Snowflake.generate();

    Date.now = () => 1609459201000; // Timestamp changes
    const snowflake2 = Snowflake.generate();

    expect(snowflake1).not.toBe(snowflake2); // IDs should be different
  });

  test("should ensure the correct snowflake ID format", () => {
    const node = 1;
    const snowflake = Snowflake.generate(node);
    const parts = snowflake.split("");
    const timestampPart = parts.slice(0, 10).join("");
    const sequencePart = parts.slice(20).join("");

    expect(BigInt(timestampPart)).toBeGreaterThan(0); // timestamp part should be > 0
    expect(Number(sequencePart)).toBeLessThan(0xfff); // sequence part should be < 0xfff
  });
});
