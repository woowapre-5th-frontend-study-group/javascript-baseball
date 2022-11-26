const { Console } = require('@woowacourse/mission-utils');
const Utils = require('../Util/Utils');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validator = require('../Model/Validator');
const { OPTION } = require('../Util/Constants');

class GameController {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  start() {
    OutputView.printStart();
    this.#computer.setCorrectNumbers();
    this.requestNumber();
  }

  requestNumber() {
    InputView.readNumber((userInput) => {
      const userNumbers = Utils.convertNumber(userInput);
      Validator.validateNumber(userNumbers);
      const trial = this.#computer.compareNumber(userNumbers);
      this.showResult(trial);
    });
  }

  showResult(trial) {
    OutputView.printResult(trial);
    this.showNext(trial);
  }

  showNext(trial) {
    if (trial.strike === 3) {
      OutputView.printSuccess();
      return this.requestRetry();
    }
    this.requestNumber();
  }

  requestRetry() {
    InputView.readCommand((userInput) => {
      Validator.validateOption(userInput);
      if (userInput === OPTION.RESTART) return this.start();
      if (userInput === OPTION.END) return Console.close();
    });
  }
}

module.exports = GameController;