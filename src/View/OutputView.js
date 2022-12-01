const { Console } = require("@woowacourse/mission-utils");
const { GAME_START_MESSAGE } = require("../utils/constants");

const OutputView = {
  printStartMsg() {
    Console.print(GAME_START_MESSAGE);
  },
};

module.exports = OutputView;
