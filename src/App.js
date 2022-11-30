const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
const { COMMAND, OUT_COUNT } = require("./constants/game");

const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  #baseballGame = new BaseballGame();

  play() {
    OutputView.printStart();
    this.#start();
  }

  #start() {
    this.#baseballGame.createAnswerNumbers();

    this.#readPlayerInput();
  }

  #readPlayerInput() {
    InputView.readPlayerInput(this.#compareAnswer.bind(this));
  }

  #compareAnswer(threeDigistsNumber) {
    const countResult = this.#baseballGame.getCountResult(threeDigistsNumber);
    OutputView.printCountResult(countResult);

    if (countResult.strike === OUT_COUNT) {
      OutputView.printGameSuccess();
      this.#readGameCommand();
      return;
    }

    this.#readPlayerInput();
  }

  #readGameCommand() {
    InputView.readGameCommand(this.#actionGameCommand.bind(this));
  }

  #actionGameCommand(gameCommand) {
    if (Number(gameCommand) === COMMAND.restart) {
      this.#start();
      return;
    }
    this.#quit();
  }

  #quit() {
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
