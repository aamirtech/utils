/**
 * Converts a given string to Title Case.
 *
 * This function transforms the input string by:
 * - Converting all characters to lowercase.
 * - Replacing underscores and hyphens with spaces.
 * - Capitalizing the first letter of each word.
 *
 * @param str - The input string to be converted.
 * @returns The converted string in Title Case.
 * @example
 * toTitleCase("hello_world"); // "Hello World"
 */
export const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const toSpecialCase_ = (str: string, separator: string) => {
  return (
    str
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (/[-_\s.]/.test(letter)) {
          return separator;
        }

        if (letter.toUpperCase() === letter) {
          return separator + letter.toLowerCase();
        }

        return letter;
      })
      .join("")
      // Replacing multiple separators with the single separator.
      .replace(new RegExp(separator + "+", "g"), separator)
      // Deleting the separator from the beginning of the string.
      .replace(new RegExp("^" + separator), "")
      // Deleting the separator at the end of the string.
      .replace(new RegExp(separator + "$"), "")
  );
};

const toCamelCase_ = (str: string, isUpperCamelCase: boolean) => {
  str = str
    .toLocaleLowerCase()
    .replace(/[-_\s.]+(.)?/g, (...args) =>
      args[1] ? args[1].toUpperCase() : ""
    );
  return (
    (isUpperCamelCase
      ? str.substr(0, 1).toUpperCase()
      : str.substr(0, 1).toLowerCase()) + str.substr(1)
  );
};

/**
 * Converts a given string to camelCase format.
 *
 * @param str - The string to be converted.
 * @returns The camelCase formatted string.
 * @example
 * toCamelCase("hello_world"); // "helloWorld"
 */
export const toCamelCase = (str) => toCamelCase_(str, false);

/**
 * Converts a given string to PascalCase format.
 *
 * @param str - The string to be converted.
 * @returns The PascalCase formatted string.
 * @example
 * toPascalCase("hello_world"); // "HelloWorld"
 */

export const toPascalCase = (str) => toCamelCase_(str, true);

/**
 * Converts a given string to snake_case format.
 *
 * @param str - The string to be converted.
 * @returns The snake_case formatted string.
 * @example
 * toSnakeCase("hello World"); // "hello_world"
 */

export const toSnakeCase = (str) => toSpecialCase_(str, "_");

/**
 * Converts a given string to kebab-case format.
 *
 * @param str - The string to be converted.
 * @returns The kebab-case formatted string.
 * @example
 * toKebabCase("hello World"); // "hello-world"
 */

export const toKebabCase = (str) => toSpecialCase_(str, "-");
