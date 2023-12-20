import generate from "./snowflake/generate";
import isValid from "./snowflake/isValid";
import Numeric from "./otp/numeric";
import Alphabetic from "./otp/alphabetic";
import AlphaNumeric from "./otp/alphaNumeric";

export const Id = {
  Snowflake: generate,
  IsValidSnowflake: isValid,
  Numeric,
  Alphabetic,
  AlphaNumeric,
};
