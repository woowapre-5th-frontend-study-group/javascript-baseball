const { ERROR_MESSAGE } = require("./constants");

const InputValidation = {
  //숫자만 입력했는지 검사
  isNumber(arr) {
    if (isNaN(arr)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  },
  //3개의 숫자인지 검사
  isThreeNums(string) {
    if (string.length != 3) throw new Error(ERROR_MESSAGE.THREE_DIGIT);
  },
  //0이 포함되어 있는지 검사
  isZeroIncluded(string) {
    if (string.includes("0")) throw new Error(ERROR_MESSAGE.RANGE_ERROR);
  },
  //문자열 내 중복 여부 검사
  isDuplicate(orginalString) {
    const stringToCompare = [...new Set(orginalString)].join("");
    const IS_DUPLICATE = stringToCompare != orginalString; //만약 같지 않다면 true

    if (IS_DUPLICATE) throw new Error(ERROR_MESSAGE.DUPLICATE);
  },

  //플레이어의 입력값 유효성 판단하기 (숫자를 3개 입력하지 않는 경우 등) -> 올바른 입력값은 '1-9 사이의 숫자 3개'
  isValid(playerGuess) {
    this.isNumber(playerGuess);
    this.isThreeNums(playerGuess);
    this.isZeroIncluded(playerGuess);
    this.isDuplicate(playerGuess);
  },
};

module.exports = InputValidation;
