const ENUM_SPLIT_REGEX = /\n/;

function parseEnum(input) {
  return input
    .split(ENUM_SPLIT_REGEX)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

module.exports = {
  parseEnum,
};
