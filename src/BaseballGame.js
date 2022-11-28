const { Random } = require("@woowacourse/mission-utils");
const { COUNT, NUMBER_DIGITS } = require("./constants/game");

class BaseBallGame {
  /**
   * 정답 숫자
   * @type {Set<number>}
   */
  #answerNumbers;

  setAnswerNumbers() {
    this.#answerNumbers = this.#createRandomUniqueNumberList();
  }

  getCount(playerNumbers) {
    let strike = 0;
    let ball = 0;
    this.#setPlayerNumbers(playerNumbers).forEach(
      (playerNumber, playerNumberIndex) => {
        if (!this.#answerNumbers.has(playerNumber)) return;
        if (this.#isStrike({ playerNumber, playerNumberIndex })) {
          return (strike += 1);
        }
        ball += 1;
      }
    );
    return { strike, ball };
  }

  #setPlayerNumbers(playerNumbers) {
    return playerNumbers.split("").map(Number);
  }

  #createRandomUniqueNumberList() {
    const randomUniqueNumberList = new Set();
    while (randomUniqueNumberList.size < NUMBER_DIGITS) {
      const randomNumber = this.#randomNumberGenerate();
      randomUniqueNumberList.add(randomNumber);
    }
    return randomUniqueNumberList;
  }

  #randomNumberGenerate() {
    const RANDOM_LOWER_INCLUSIVE = 1;
    const RANDOM_UPPER_INCLUSIVE = 9;
    return Random.pickNumberInRange(
      RANDOM_LOWER_INCLUSIVE,
      RANDOM_UPPER_INCLUSIVE
    );
  }

  #isStrike({ playerNumber, playerNumberIndex }) {
    const answerNumbers = [...this.#answerNumbers];
    return answerNumbers[playerNumberIndex] === playerNumber;
  }
}

module.exports = BaseBallGame;
