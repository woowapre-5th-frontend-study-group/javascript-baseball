const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_START_MESSAGE,
  GUESS_INPUT_MESSAGE,
  GAME_COMMAND_MESSAGE,
  ERROR_MESSAGE,
} = require("../utils/constants");
const InputValidation = require("../utils/InputValidation");
const OutputView = require("./OutputView");

const InputView = {
  readPlayerGuess(callback) {
    Console.readLine(GUESS_INPUT_MESSAGE, callback);
  },

  readCommand() {},
};

module.exports = InputView;
