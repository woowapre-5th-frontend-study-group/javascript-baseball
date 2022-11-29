/** 유틸 import */
const { Console } = require("@woowacourse/mission-utils");

/** 상수 import */
const Constants = require("../Constants");

const OutputView = {
  /** 게임 시작 문구를 출력합니다 */
  printIntroMessage() {
    Console.print(Constants.OUTPUT.INTRO_MESSAGE);
    this.addNewLine();
  },

  /** 게임 종료 문구를 출력합니다 */
  printOutroMessage() {
    Console.print(Constants.OUTPUT.OUTRO_MESSAGE);
  },

  /** 게임 성공 문구를 출력합니다 */
  printGameClear() {
    Console.print(Constants.OUTPUT.GAME_CLEAR);
  },

  /**
   * 볼과 스트라이크에 대한 힌트를 출력합니다.
   *
   * @param {{ballCount: number, strikeCount: number}} GameResult 볼과 스트라이크를 인수로 받습니다.
   * @returns {void}
   */
  printHint({ ballCount, strikeCount }) {
    const { BALL, STRIKE, NOTHING, NULL, DELIMITER } = Constants.BASEBALL;
    const ballMessage = ballCount ? `${ballCount}${BALL}` : NULL;
    const strikeMessage = strikeCount ? `${strikeCount}${STRIKE}` : NULL;
    const printMessage = [ballMessage, strikeMessage].join(DELIMITER).trim();

    Console.print(printMessage || NOTHING);
    this.addNewLine();
  },

  /**
   * 에러를 출력합니다.
   *
   * @param {string} error
   */
  printError(error) {
    Console.print(`${Constants.ERROR.HEADING} ${error}`);
    this.addNewLine();
  },

  /** 한 줄을 띄웁니다. */
  addNewLine() {
    Console.print(Constants.OUTPUT.NULL);
  },

  /** Console를 닫습니다. */
  close() {
    Console.close();
  },
};

module.exports = OutputView;
