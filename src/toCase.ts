export const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const toSpecialCase_ = (str, separator) => {
  return (
    str
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

const toCamelCase_ = (str, isUpperCamelCase) => {
  str = str.replace(/[-_\s.]+(.)?/g, (...args) =>
    args[1] ? args[1].toUpperCase() : ""
  );
  return (
    (isUpperCamelCase
      ? str.substr(0, 1).toUpperCase()
      : str.substr(0, 1).toLowerCase()) + str.substr(1)
  );
};

export const toCamelCase = (str) => toCamelCase_(str, false);
export const toPascalCase = (str) => toCamelCase_(str, true);
export const toSnakeCase = (str) => toSpecialCase_(str, "_");
export const toKebabCase = (str) => toSpecialCase_(str, "-");
