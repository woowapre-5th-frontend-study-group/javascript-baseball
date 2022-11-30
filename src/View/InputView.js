const { MESSAGE } = require('../libs/const');
const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readPlayerAnswer(callback) {
    Console.readLine(MESSAGE.inputNumber, callback);
  },

  readCommand(callback) {
    Console.readLine(MESSAGE.inputOption, callback);
  },
};

module.exports = InputView;
