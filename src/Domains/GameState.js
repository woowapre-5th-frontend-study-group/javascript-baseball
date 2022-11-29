const Gong = require("../Models/Gong");

/** @type {Gong} */
let _answerGong = null;

/** @type {Gong} */
let _userGong = null;

/** 게임 상태를 관리하는 객체 */
const GameState = {
  /**
   * 정답 숫자를 설정한다.
   *
   * @param {Array<number>} numbers 정답 숫자
   */
  setAnswerGong(numbers) {
    _answerGong = new Gong(numbers);
  },

  /**
   * 정답 숫자를 반환한다.
   *
   * @returns {Gong}
   */
  getAnswerGong() {
    return _answerGong;
  },

  /**
   * 유저의 추측 숫자를 설정한다.
   *
   * @param {Array<number>} numbers
   */
  setUserGong(numbers) {
    _userGong = new Gong(numbers);
  },

  /**
   * 유저의 추측 숫자를 반환한다.
   *
   * @returns {Gong}
   */
  getUserGong() {
    return _userGong;
  },

  /**
   * 정답 숫자와 추측 숫자의 비교 결과를 반환한다.
   *
   * @returns {{ballCount: number, strikeCount: number}}
   */
  getCompareResult() {
    return _userGong.compare(_answerGong);
  },
};

module.exports = GameState;
