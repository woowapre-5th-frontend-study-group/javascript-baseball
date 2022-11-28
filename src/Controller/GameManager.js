const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const ComputerAnswer = require('../Model/ComputerAnswer');
const Validator = require('../Model/Validator');
const Quit = require('../libs/Quit');
const { MESSAGE, OPTION } = require('../libs/const');

class GameManager {
  #computerAnswer;

  constructor() {
    this.#computerAnswer = new ComputerAnswer();
    this.#start();
  }

  #start() {
    OutputView.printMessage(MESSAGE.start);
    this.#play();
  }

  #play() {
    InputView.readPlayerAnswer((playerAnswer) => {
      Validator.playerAnswer(playerAnswer);

      OutputView.printResult(
        this.#computerAnswer.comparePlayerAnswer(playerAnswer)
      );

      this.#actionAboutPlayerAnswer(playerAnswer);
    });
  }

  #actionAboutPlayerAnswer(playerAnswer) {
    if (this.#computerAnswer.isThreeStrike(playerAnswer)) this.#end();

    this.#play();
  }

  #end() {
    InputView.readCommand((option) => {
      Validator.playerOption(option);

      this.#actionAboutCommand(option);
    });
  }

  #actionAboutCommand(option) {
    if (option === OPTION.restart) return this.#restart();

    return Quit.game();
  }

  #restart() {
    this.#computerAnswer.resetValue();
    this.#play();
  }
}

module.exports = GameManager;
