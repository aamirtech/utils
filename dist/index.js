"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = exports.Snowflake = void 0;
const generate_1 = __importDefault(require("./snowflake/generate"));
const isValid_1 = __importDefault(require("./snowflake/isValid"));
const numeric_1 = __importDefault(require("./otp/numeric"));
const alphabetic_1 = __importDefault(require("./otp/alphabetic"));
const alphaNumeric_1 = __importDefault(require("./otp/alphaNumeric"));
exports.Snowflake = {
    generate: generate_1.default,
    isValid: isValid_1.default,
};
exports.Otp = {
    generateNumeric: numeric_1.default,
    generateAlphabetic: alphabetic_1.default,
    generateAlphaNumeric: alphaNumeric_1.default,
};
//# sourceMappingURL=index.js.map