"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Id = void 0;
const generate_1 = __importDefault(require("./snowflake/generate"));
const isValid_1 = __importDefault(require("./snowflake/isValid"));
const getPublicId_1 = __importDefault(require("./getPublicId"));
exports.Id = {
    Snowflake: generate_1.default,
    IsValidSnowflake: isValid_1.default,
    getPublicId: getPublicId_1.default,
};
//# sourceMappingURL=index.js.map