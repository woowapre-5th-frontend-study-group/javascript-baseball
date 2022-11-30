const { VALUE } = require("../constant/Value");
const { ERROR } = require("../constant/Error");

const Validate = {
  checkUserInput(number) {
    this.isNumber(number);
    this.isLengthValid(number);
    this.isIncludesZero(number);
    this.isDuplicated(number);
  },
  isNumber(number) {
    number.forEach((element) => {
      if (isNaN(element)) {
        throw new Error(ERROR.NUMBER.NOT_A_NUMBER);
      }
    });
  },
  isLengthValid(number) {
    if (number.length != 3) {
      throw new Error(ERROR.NUMBER.INVALID_LENGTH);
    }
  },
  isIncludesZero(number) {
    if (number.includes("0")) throw new Error(ERROR.NUMBER.INCLUDES_ZERO);
  },
  isDuplicated(number) {
    let removeDuplication = new Set(number);
    removeDuplication = [...removeDuplication];
    if (removeDuplication.length != 3) {
      throw new Error(ERROR.NUMBER.DUPLICATED);
    }
  },

  checkCommand(command) {
    if (command !== VALUE.COMMAND.RESTART && command !== VALUE.COMMAND.FINISH) {
      throw new Error(ERROR.COMMAND.INVALID_COMMAND);
    }
  },
};

module.exports = Validate;
