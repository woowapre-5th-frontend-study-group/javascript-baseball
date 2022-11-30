const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/messages");

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printCountResult({ ball, strike }) {
    if (this.isNothing({ ball, strike })) {
      return Console.print(OUTPUT_MESSAGE.nothing);
    }

    this.printStrikeBallCountMessage({ ball, strike });
  },

  printGameSuccess() {
    Console.print(OUTPUT_MESSAGE.end);
  },

  printStrikeBallCountMessage({ ball, strike }) {
    const ballMessage = ball ? `${ball}${OUTPUT_MESSAGE.ball}` : "";
    const strikeMessage = strike ? `${strike}${OUTPUT_MESSAGE.strike}` : "";

    Console.print(`${ballMessage} ${strikeMessage}`);
  },

  isNothing({ ball, strike }) {
    return ball === 0 && strike === 0;
  },
};

module.exports = OutputView;
