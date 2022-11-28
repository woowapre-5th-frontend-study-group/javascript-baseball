const Gong = require("../Models/Gong");

/** @type {Gong} */
let _answerGong = null;

/** @type {Gong} */
let _userGong = null;

const GameState = {
  setAnswerGong(numbers) {
    _answerGong = new Gong(numbers);
  },

  /**
   *
   * @returns {Gong}
   */
  getAnswerGong() {
    return _answerGong;
  },

  setUserGong(numbers) {
    _userGong = new Gong(numbers);
  },

  /**
   *
   * @returns {Gong}
   */
  getUserGong() {
    return _userGong;
  },

  getCompareResult() {
    return _userGong.compare(_answerGong);
  },
};

module.exports = GameState;
