"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Id = void 0;
const generate_1 = __importDefault(require("./snowflake/generate"));
const isValid_1 = __importDefault(require("./snowflake/isValid"));
const numeric_1 = __importDefault(require("./otp/numeric"));
const alphabetic_1 = __importDefault(require("./otp/alphabetic"));
const alphaNumeric_1 = __importDefault(require("./otp/alphaNumeric"));
exports.Id = {
    Snowflake: generate_1.default,
    IsValidSnowflake: isValid_1.default,
    Numeric: numeric_1.default,
    Alphabetic: alphabetic_1.default,
    AlphaNumeric: alphaNumeric_1.default,
};
//# sourceMappingURL=index.js.map