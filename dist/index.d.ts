import generate from "./snowflake/generate";
import isValid from "./snowflake/isValid";
import generateNumeric from "./otp/numeric";
import generateAlphabetic from "./otp/alphabetic";
import generateAlphaNumeric from "./otp/alphaNumeric";
export declare const Snowflake: {
    generate: typeof generate;
    isValid: typeof isValid;
};
export declare const Otp: {
    generateNumeric: typeof generateNumeric;
    generateAlphabetic: typeof generateAlphabetic;
    generateAlphaNumeric: typeof generateAlphaNumeric;
};
//# sourceMappingURL=index.d.ts.map