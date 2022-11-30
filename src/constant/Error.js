const { VALUE } = require("./Value");

const ERROR = {
  NUMBER: {
    NOT_A_NUMBER: "[ERROR] 값은 숫자로만 이루어져야 합니다",
    INVALID_LENGTH: `[ERROR] 값은 ${VALUE.RANGE_OF_COMPUTER_NUMBER.LENGTH}자리로만 이루어져야 합니다`,
    INCLUDES_ZERO: `[ERROR] 0을 제외한  ${VALUE.RANGE_OF_COMPUTER_NUMBER.MINIMUM}~${VALUE.RANGE_OF_COMPUTER_NUMBER.MAXIMUM}의 숫자만 입력가능합니다`,
    DUPLICATED: "[ERROR] 값이 중복되어선 안됩니다",
  },

  COMAND: {
    INVALID_COMMAND: `[ERROR] ${VALUE.COMMAND.RESTART}과 ${VALUE.COMMAND.FINISH}중 하나만 입력가능합니다.`,
  },
};

module.exports = ERROR;
