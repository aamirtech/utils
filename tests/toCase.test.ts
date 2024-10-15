import { describe, expect, it } from "bun:test";
import {
  toTitleCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
} from "../src/toCase";

describe("toTitleCase", () => {
  it("should convert string to title case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("HELLO_WORLD")).toBe("Hello World");
    expect(toTitleCase("hello-world")).toBe("Hello World");
  });
});

describe("toCamelCase", () => {
  it("should convert string to camel case", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
    expect(toCamelCase("HELLO_WORLD")).toBe("helloWorld");
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });
});

describe("toPascalCase", () => {
  it("should convert string to pascal case", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
    expect(toPascalCase("HELLO_WORLD")).toBe("HelloWorld");
    expect(toPascalCase("hello-world")).toBe("HelloWorld");
  });
});

describe("toSnakeCase", () => {
  it("should convert string to snake case", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
    expect(toSnakeCase("HELLO_WORLD")).toBe("hello_world");
    expect(toSnakeCase("hello-world")).toBe("hello_world");
  });
});

describe("toKebabCase", () => {
  it("should convert string to kebab case", () => {
    expect(toKebabCase("hello world")).toBe("hello-world");
    expect(toKebabCase("HELLO_WORLD")).toBe("hello-world");
    expect(toKebabCase("hello-world")).toBe("hello-world");
  });
});
