const ValidatorGameCommand = require("./ValidatorGameCommand");
const ValidatorNumber = require("./ValidatorNumber");

/** 각 상황에 맞는 조건을 생성하고 검사하는 역할 */
const Validation = {
  /**
   * 입력받은 추측 숫자에 대한 유효성 검사
   *
   * @param {string} value 입력받은 추측 숫자
   * @throws 앞선 조건들에 만족하지 않으면 throw를 발생
   * @returns {boolean} 유효성 검사 통과 여부
   */
  validateNumber(value) {
    try {
      new ValidatorNumber(value)
        .shouldBeNotEmpty()
        .withMessage("빈 값이 아닌 다른 값을 입력해주세요.")
        .shouldBeThree()
        .withMessage("3자리의 서로 다른 숫자를 입력해주세요.")
        .shouldBeNumberic()
        .withMessage("문자가 아닌 숫자를 입력해주세요.")
        .shouldBeExclusive()
        .withMessage("서로 다른 3자리 숫자를 입력해주세요.");
    } catch (error) {
      throw error;
    }

    return true;
  },

  /**
   * 입력받은 게임 커맨드에 대한 유효성 검사
   *
   * @param {string} value 입력받은 게임 커맨드
   * @throws 앞선 조건들에 만족하지 않으면 throw를 발생
   * @returns {boolean} 유효성 검사 통과 여부
   */
  validateGameCommand(value) {
    try {
      new ValidatorGameCommand(value)
        .shouldBeNotEmpty()
        .withMessage("빈 값이 아닌 다른 값을 입력해주세요.")
        .shouldBeOneInput()
        .withMessage("1(새로 시작), 또는 2(종료)의 값을 하나만 입력해주세요.")
        .shouldBeOne("1", "2")
        .withMessage("1(새로 시작), 또는 2(종료)의 값만 입력해주세요.");
    } catch (error) {
      throw error;
    }

    return true;
  },
};

module.exports = Validation;
