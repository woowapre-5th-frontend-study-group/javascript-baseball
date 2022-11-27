const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT, MESSAGE } = require('../libs/Const');

class OutputView {
  static printMessage(message) {
    Console.print(message);
  }

  static printResult({ ballCount, strikeCount }) {
    if (ballCount === 0 && strikeCount === 0) {
      Console.print(OUTPUT.nothing);
      return;
    }

    this.#printBallAndStrikeCount(ballCount, strikeCount);

    if (strikeCount === 3) Console.print(MESSAGE.success);
  }

  static #printBallAndStrikeCount(ballCount, strikeCount) {
    const ballCountPrint = ballCount !== 0 ? `${ballCount}${OUTPUT.ball} ` : '';
    const strikeCountPrint =
      strikeCount !== 0 ? `${strikeCount}${OUTPUT.strike}` : '';

    Console.print(`${ballCountPrint}${strikeCountPrint}`);
  }
}

module.exports = OutputView;
