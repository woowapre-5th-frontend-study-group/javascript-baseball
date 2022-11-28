const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("../Constants");

const InputView = {
  questionNumber(nextCallback) {
    Console.readLine(INPUT.NUMBER_QUESTION, nextCallback);
  },

  questionRetry(nextCallback) {
    Console.readLine(INPUT.GAME_COMMAND_QUESTION, nextCallback);
  },
};

module.exports = InputView;
