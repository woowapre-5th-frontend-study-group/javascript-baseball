const Quit = require('../libs/Quit');
const { OPTION, ERROR_MESSAGE } = require('../libs/Const');

const Validator = {
  playerAnswer(playerAnswer) {
    this.checkNumber(playerAnswer);

    this.checkThreeLength(playerAnswer);

    this.checkNotIncludesZero(playerAnswer);

    this.checkNotOverlap(playerAnswer);
  },

  playerOption(option) {
    let isValid = false;

    if (option === OPTION.restart || option === OPTION.exit) isValid = true;

    if (!isValid) Quit.withException(ERROR_MESSAGE.option);
  },

  checkNumber(playerAnswer) {
    if (isNaN(playerAnswer)) Quit.withException(ERROR_MESSAGE.isNotNumber);
  },

  checkThreeLength(playerAnswer) {
    if (playerAnswer.length !== 3) Quit.withException(ERROR_MESSAGE.length);
  },

  checkNotIncludesZero(playerAnswer) {
    if (playerAnswer.includes('0'))
      Quit.withException(ERROR_MESSAGE.includesZero);
  },

  checkNotOverlap(playerAnswer) {
    if ([...new Set([...(playerAnswer + '')])].length !== 3)
      Quit.withException(ERROR_MESSAGE.overlap);
  },
};

module.exports = Validator;
