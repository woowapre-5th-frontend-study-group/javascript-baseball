const { Console } = require('@woowacourse/mission-utils');
const { ERROR_HEADING } = require('./Const');

const Quit = {
  game: () => {
    Console.close();
  },

  withException: (error) => {
    throw new Error(`${ERROR_HEADING} ${error}`);
  },
};

module.exports = Quit;
