"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = exports.toSnakeCase = exports.toPascalCase = exports.toCamelCase = exports.toTitleCase = void 0;
const toTitleCase = (str) => str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
exports.toTitleCase = toTitleCase;
const toSpecialCase_ = (str, separator) => {
    return (str
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
        .replace(new RegExp(separator + "$"), ""));
};
const toCamelCase_ = (str, isUpperCamelCase) => {
    str = str
        .toLocaleLowerCase()
        .replace(/[-_\s.]+(.)?/g, (...args) => args[1] ? args[1].toUpperCase() : "");
    return ((isUpperCamelCase
        ? str.substr(0, 1).toUpperCase()
        : str.substr(0, 1).toLowerCase()) + str.substr(1));
};
const toCamelCase = (str) => toCamelCase_(str, false);
exports.toCamelCase = toCamelCase;
const toPascalCase = (str) => toCamelCase_(str, true);
exports.toPascalCase = toPascalCase;
const toSnakeCase = (str) => toSpecialCase_(str, "_");
exports.toSnakeCase = toSnakeCase;
const toKebabCase = (str) => toSpecialCase_(str, "-");
exports.toKebabCase = toKebabCase;
//# sourceMappingURL=toCase.js.map