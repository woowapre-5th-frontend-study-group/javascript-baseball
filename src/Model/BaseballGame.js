const GameRandomNumberGenerator = require("./GameAnswerGenerator");

class BaseballGame {
  #gameAnswer; //게임의 정답

  constructor(gameAnswer) {
    this.#gameAnswer = gameAnswer;
  }
  /** 정답 반환 */
  getAnswer() {
    return this.#gameAnswer;
  }

  compareWithAnswer(guess) {}
}

module.exports = BaseballGame;
