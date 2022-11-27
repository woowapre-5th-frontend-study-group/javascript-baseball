const Quit = require('../libs/Quit');
const { OPTION, ERROR_MESSAGE } = require('../libs/const');

const Validator = {
  playerAnswer(playerAnswer) {
    this.checkNumber(playerAnswer);

    this.checkThreeLength(playerAnswer);

    this.checkNotIncludesZero(playerAnswer);

    this.checkNotOverlap(playerAnswer);
  },

  playerOption(option) {
    let isValid = false;

    if (option === OPTION.RESTART || option === OPTION.EXIT) isValid = true;

    if (!isValid) Quit.withException(ERROR_MESSAGE.OPTION);
  },

  checkNumber(playerAnswer) {
    if (isNaN(playerAnswer))
      Quit.withException('[ERROR] 숫자만 입력 가능합니다.');
  },

  checkThreeLength(playerAnswer) {
    if (playerAnswer.length !== 3)
      Quit.withException('[ERROR] 숫자 3개를 입력해야 합니다.');
  },

  checkNotIncludesZero(playerAnswer) {
    if (playerAnswer.includes('0'))
      Quit.withException('[ERROR] 0은 입력할 수 없습니다.');
  },

  checkNotOverlap(playerAnswer) {
    if ([...new Set([...(playerAnswer + '')])].length !== 3)
      Quit.withException('[ERROR] 중복된 숫자를 입력할 수 없습니다.');
  },
};

module.exports = Validator;
