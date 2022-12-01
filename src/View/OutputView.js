const { Console } = require("@woowacourse/mission-utils");
const { GUESS_RESULT, GAME_START_MESSAGE } = require("../utils/constants");

const OutputView = {
  printGuessResult({ ball, strike }) {
    if (ball == 0 && strike == 0) return Console.print(GUESS_RESULT.NOTHING);

    if (ball == 0 && strike == 3)
      return Console.print(GUESS_RESULT.THREE_STRIKE);

    if (ball == 0 && strike != 0) return Console.print(`${strike}스트라이크`);

    if (ball != 0 && strike == 0) return Console.print(`${ball}볼`);

    if (ball != 0 && strike != 0)
      return Console.print(`${ball}볼 ${strike}스트라이크`);
  },

  printStartMsg() {
    Console.print(GAME_START_MESSAGE);
  },
};

module.exports = OutputView;
