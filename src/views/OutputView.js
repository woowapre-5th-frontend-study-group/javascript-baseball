const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT, MESSAGE, STRIKE_COUNT } = require('../libs/Const');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printResult({ ballCount, strikeCount }) {
    if (ballCount === 0 && strikeCount === 0) {
      Console.print(OUTPUT.nothing);
      return;
    }

    this.printBallAndStrikeCount(ballCount, strikeCount);

    if (this.isThreeStrike(strikeCount)) Console.print(MESSAGE.success);
  },

  printBallAndStrikeCount(ballCount, strikeCount) {
    const ballCountPrint = ballCount !== 0 ? `${ballCount}${OUTPUT.ball} ` : '';
    const strikeCountPrint =
      strikeCount !== 0 ? `${strikeCount}${OUTPUT.strike}` : '';

    Console.print(`${ballCountPrint}${strikeCountPrint}`.trim());
  },

  isThreeStrike(strikeCount) {
    return strikeCount === STRIKE_COUNT;
  },
};

module.exports = OutputView;
