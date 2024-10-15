import { describe, expect, it } from "bun:test";
import { GetInitials } from "../src/getInitials";

describe("GetInitials", () => {
  it("should return initials for a single name", () => {
    expect(GetInitials("Aamir")).toBe("AA");
  });

  it("should return initials for a first and last name", () => {
    expect(GetInitials("Aamir Khan")).toBe("AK");
  });

  it("should return initials for a name with multiple spaces", () => {
    expect(GetInitials("  Aamir   Khan  ")).toBe("AK");
  });

  it("should return initials for a name with middle names", () => {
    expect(GetInitials("Aamir Ali Khan")).toBe("AK");
  });

  it("should return empty string for an empty input", () => {
    expect(GetInitials("")).toBe("");
  });

  it("should handle names with special characters", () => {
    expect(GetInitials("Aamir @ Khan")).toBe("AK");
  });

  it("should handle names with hyphens", () => {
    expect(GetInitials("Aamir-Khan")).toBe("AK");
  });

  it("should handle names with apostrophes", () => {
    expect(GetInitials("Aamir O'Khan")).toBe("AO");
  });
});
