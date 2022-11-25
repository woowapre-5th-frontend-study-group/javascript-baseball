const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
const { COMMAND } = require("./constants");

const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    OutputView.printStart();
    this.start();
  }

  start() {
    this.baseballGame.createAnswer();

    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize(this.actionBrridgeSize.bind(this));
  }

  actionBrridgeSize(threeDigistsNumber) {
    this.baseballGame.setPlayerInputValue(threeDigistsNumber);
    this.baseballGame.setCount();

    this.compareAnswer();
  }

  compareAnswer() {
    if (this.baseballGame.isAnswer()) {
      OutputView.printGameSuccess();
      return this.readGameCommand();
    }
    OutputView.printCountResult(this.baseballGame.count);

    this.readBridgeSize();
  }

  readGameCommand() {
    InputView.readGameCommand(this.actionGameCommand.bind(this));
  }

  actionGameCommand(gameCommand) {
    if (Number(gameCommand) === COMMAND.RESTART) {
      return this.start();
    }
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
