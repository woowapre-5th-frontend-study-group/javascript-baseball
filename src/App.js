const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
const { COMMAND, COUNT } = require("./constants/game");

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
    this.baseballGame.setAnswerNumbers();

    this.readPlayerInput();
  }

  readPlayerInput() {
    InputView.readPlayerInput(this.compareAnswer.bind(this));
  }

  compareAnswer(threeDigistsNumber) {
    const count = this.baseballGame.getCount(threeDigistsNumber);
    OutputView.printCountResult(count);

    if (count.strike === COUNT.out) {
      OutputView.printGameSuccess();
      this.readGameCommand();
      return;
    }

    this.readPlayerInput();
  }

  readGameCommand() {
    InputView.readGameCommand(this.actionGameCommand.bind(this));
  }

  actionGameCommand(gameCommand) {
    if (Number(gameCommand) === COMMAND.restart) {
      this.start();
      return;
    }
    this.quit();
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
