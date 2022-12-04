const { ERROR } = require("../constant/Error");
const { VALUE } = require("../constant/Value");

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
        throw new Error(ERROR.number.notANumber);
      }
    });
  },

  isLengthValid(number) {
    if (number.length != 3) {
      throw new Error(ERROR.number.invalidLength);
    }
  },

  isIncludesZero(number) {
    if (number.includes("0")) throw new Error(ERROR.number.includesZero);
  },

  isDuplicated(number) {
    let removeDuplication = new Set(number);
    removeDuplication = [...removeDuplication];
    if (removeDuplication.length != 3) {
      throw new Error(ERROR.number.duplicated);
    }
  },

  checkCommand(command) {
    if (command !== VALUE.command.restart && command !== VALUE.command.finish) {
      throw new Error(ERROR.command.invalidCommand);
    }
  },
};

module.exports = Validate;
