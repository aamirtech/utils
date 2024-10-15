"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInitials2 = void 0;
const GetInitials2 = (name) => {
    const parts = name.trim().split(/\s+/);
    return ((parts[0]?.[0] ?? "").toUpperCase() +
        (parts[parts.length - 1]?.[0] ?? "").toUpperCase());
};
exports.GetInitials2 = GetInitials2;
//# sourceMappingURL=getInitials.js.map