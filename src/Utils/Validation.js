/** Validators import */
const ValidatorGameCommand = require("./ValidatorGameCommand");
const ValidatorNumber = require("./ValidatorNumber");

/** 상수 import */
const { ERROR, BASEBALL, GAME_COMMAND } = require("../Constants");

/** 각 상황에 맞는 조건을 생성하고 검사하는 역할 */
const Validation = {
  /**
   * 입력받은 추측 숫자에 대한 유효성 검사
   *
   * @param {string} value 입력받은 추측 숫자
   * @throws 앞선 조건들에 만족하지 않으면 throw를 발생
   */
  validateNumber(value) {
    const { INCLUSIVE_LOWER, INCLUSIVE_UPPER } = BASEBALL.VALIDATION;

    new ValidatorNumber(value)
      .shouldBeNotEmpty()
      .withMessage(ERROR.NOT_EMPTY)
      .shouldBeThree()
      .withMessage(ERROR.NOT_THREE)
      .shouldBeNumberic()
      .withMessage(ERROR.NOT_NUMBERIC)
      .shouldBeExclusive()
      .withMessage(ERROR.NOT_EXCLUSIVE)
      .shouldBeInRange(INCLUSIVE_LOWER, INCLUSIVE_UPPER)
      .withMessage(ERROR.NOT_IN_RANGE);
  },

  /**
   * 입력받은 게임 커맨드에 대한 유효성 검사
   *
   * @param {string} value 입력받은 게임 커맨드
   * @throws 앞선 조건들에 만족하지 않으면 throw를 발생
   */
  validateGameCommand(value) {
    new ValidatorGameCommand(value)
      .shouldBeNotEmpty()
      .withMessage(ERROR.NOT_EMPTY)
      .shouldBeOneInput()
      .withMessage(ERROR.NOT_ONE_INPUT)
      .shouldBeOne(GAME_COMMAND.NEW_GAME, GAME_COMMAND.EXIT)
      .withMessage(ERROR.NOT_ONE);
  },
};

module.exports = Validation;
