const Validation = require("./Validation");
const OutputView = require("../Views/OutputView");
const { INPUT_TYPE } = require("../Constants");

const ExceptionHandler = {
  tryValidate(value, validateType) {
    const validateFunction = {
      [INPUT_TYPE.NUMBER]: Validation.validateNumber,
      [INPUT_TYPE.GAME_COMMAND]: Validation.validateGameCommand,
    };

    try {
      validateFunction[validateType](value);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  },
};

module.exports = ExceptionHandler;
