const Computer = require("../Model/Computer");

class Baseball {
  #gameAnswer; //게임의 정답

  constructor() {
    this.#gameAnswer = Computer.generateAnswer();
  }
  /** 정답 반환 */
  getAnswer() {
    return this.#gameAnswer;
  }

  compareWithAnswer(guess) {
    let [ball, strike] = [0, 0];

    guess.forEach((guessNum, index) => {
      if (guessNum == this.#gameAnswer[index]) return (strike += 1);
      if (this.#gameAnswer.includes(guessNum)) ball += 1;
    });
    return { ballCount: ball, strikeCount: strike };
  }
}

module.exports = Baseball;
