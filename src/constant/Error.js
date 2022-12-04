const { VALUE } = require("./Value");

const ERROR_HEADER = "[ERROR]";

const ERROR = {
  number: {
    notANumber: ERROR_HEADER + "값은 숫자로만 이루어져야 합니다",
    invalidLength:
      ERROR_HEADER +
      `값은 ${VALUE.computerNumberRange.length}자리로만 이루어져야 합니다`,
    includesZero:
      ERROR_HEADER +
      `0을 제외한  ${VALUE.computerNumberRange.minimum}~${VALUE.computerNumberRange.maximum}의 숫자만 입력가능합니다`,
    duplicated: ERROR_HEADER + "값이 중복되어선 안됩니다",
  },

  command: {
    invalidCommand:
      ERROR_HEADER +
      `${VALUE.command.restart}과 ${VALUE.command.finish}중 하나만 입력가능합니다.`,
  },
};

module.exports = ERROR;
