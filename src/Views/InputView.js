const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("../Constants");

const InputView = {
  /**
   * 사용자의 추측 번호를 입력받습니다.
   *
   * @param {function} nextCallback 입력을 넘길 콜백
   */
  questionNumber(nextCallback) {
    Console.readLine(INPUT.NUMBER_QUESTION, nextCallback);
  },

  /**
   * 게임 커맨드에 대한 입력을 받습니다.
   *
   * @param {function} nextCallback 입력을 넘길 콜백
   */
  questionRetry(nextCallback) {
    Console.readLine(INPUT.GAME_COMMAND_QUESTION, nextCallback);
  },
};

module.exports = InputView;
