"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInitials = void 0;
const GetInitials = (name) => {
    const parts = name.trim().replace("-", " ").replace("_", " ").split(/\s+/);
    return ((parts[0]?.[0] ?? "").toUpperCase() +
        (parts[parts.length - 1]?.[0] ?? "").toUpperCase());
};
exports.GetInitials = GetInitials;
console.log((0, exports.GetInitials)("Aamir O'Khan"));
//# sourceMappingURL=getInitials.js.map