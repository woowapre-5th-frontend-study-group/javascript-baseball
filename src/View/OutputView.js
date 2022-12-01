const { Console } = require("@woowacourse/mission-utils");
const { GUESS_RESULT, GAME_START_MESSAGE } = require("../utils/constants");

const OutputView = {
  printGuessResult(result) {
    if (result.ballCount == 0 && result.strikeCount == 0)
      return Console.print(GUESS_RESULT.NOTHING);

    if (result.ballCount == 0 && result.strikeCount == 3)
      return Console.print(GUESS_RESULT.THREE_STRIKE);

    if (result.ballCount == 0 && result.strikeCount != 0)
      return Console.print(`${result.strikeCount}스트라이크`);

    if (result.ballCount != 0 && result.strikeCount == 0)
      return Console.print(`${result.ballCount}볼`);

    if (result.ballCount != 0 && result.strikeCount != 0)
      return Console.print(
        `${result.ballCount}볼 ${result.strikeCount}스트라이크`
      );
  },

  printStartMsg() {
    Console.print(GAME_START_MESSAGE);
  },
};

module.exports = OutputView;
