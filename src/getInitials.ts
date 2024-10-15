/**
 * Extracts the initials from a given name.
 *
 * @param {string} name - The name to process.
 * @returns {string} The initials in uppercase, or an empty string if the input is invalid.
 *
 * @example
 * GetInitials("John Doe"); // returns "JD"
 */

export const GetInitials = (name: string) => {
  const parts = name.trim().replace("-", " ").replace("_", " ").split(/\s+/);
  return (
    (parts[0]?.[0] ?? "").toUpperCase() +
    (parts[parts.length - 1]?.[0] ?? "").toUpperCase()
  );
};
