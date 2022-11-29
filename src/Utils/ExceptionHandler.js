/** View Import */
const OutputView = require("../Views/OutputView");

/** 유틸 import */
const Validation = require("./Validation");

/** 상수 import */
const { INPUT_TYPE } = require("../Constants");

/** 유효성 검사 클래스에서 발생하는 예외를 처리하는 역할 */
const ExceptionHandler = {
  /**
   *
   * @param {any} value 유효성 검사할 값
   * @param {INPUT_TYPE} validateType 유효성 검사 타입
   * @returns {boolean}
   */
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
