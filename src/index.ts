import generate from "./snowflake/generate";
import isValid from "./snowflake/isValid";
import generateNumeric from "./otp/numeric";
import generateAlphabetic from "./otp/alphabetic";
import generateAlphaNumeric from "./otp/alphaNumeric";

export const Snowflake = {
  generate,
  isValid,
};

export const Otp = {
  generateNumeric,
  generateAlphabetic,
  generateAlphaNumeric,
};
