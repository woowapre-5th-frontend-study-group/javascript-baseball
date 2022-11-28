const { Console } = require("@woowacourse/mission-utils");
const Constants = require("../Constants");

const OutputView = {
  printIntroMessage() {
    Console.print(Constants.OUTPUT.INTRO_MESSAGE);
  },

  printOutroMessage() {
    Console.print(Constants.OUTPUT.OUTRO_MESSAGE);
  },

  printGameClear() {
    Console.print(Constants.OUTPUT.GAME_CLEAR);
  },

  printHint({ ballCount, strikeCount }) {
    const { BALL, STRIKE, NOTHING, NULL, DELIMITER } = Constants.BASEBALL;
    const ballMessage = ballCount ? `${ballCount}${BALL}` : NULL;
    const strikeMessage = strikeCount ? `${strikeCount}${STRIKE}` : NULL;
    const printMessage = [ballMessage, strikeMessage].join(DELIMITER).trim();

    Console.print(printMessage || NOTHING);
  },

  printError(error) {
    Console.print(`${Constants.ERROR.HEADING} ${error}`);
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
