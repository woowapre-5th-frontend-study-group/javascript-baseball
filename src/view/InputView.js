const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/messages");
const Validation = require("../Validation");

const InputView = {
  readPlayerInput(actionPlayerInput) {
    Console.readLine(INPUT_MESSAGE.playerInput, (playerNumbers) => {
      Validation.checkPlayerNumbers(playerNumbers);
      actionPlayerInput(playerNumbers);
    });
  },

  readGameCommand(actionGameCommand) {
    Console.readLine(INPUT_MESSAGE.restart, (gameCommand) => {
      Validation.checkGameCommand(gameCommand);
      actionGameCommand(gameCommand);
    });
  },
};

module.exports = InputView;
