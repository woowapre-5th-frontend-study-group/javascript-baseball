const { MESSAGE } = require('../libs/const');
const { Console } = require('@woowacourse/mission-utils');

class InputView {
  static readPlayerAnswer(callback) {
    Console.readLine(MESSAGE.inputNumber, callback);
  }

  static readCommand(callback) {
    Console.readLine(MESSAGE.inputOption, callback);
  }
}

module.exports = InputView;
