import generate from "./snowflake/generate";
import isValid from "./snowflake/isValid";
import getPublicId from "./getPublicId";

export const Id = {
  Snowflake: generate,
  IsValidSnowflake: isValid,
  getPublicId,
};
