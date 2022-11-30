const { Random } = require("@woowacourse/mission-utils");
const { NUMBER_DIGITS } = require("./constants/game");

class BaseBallGame {
  /**
   * 정답 숫자
   * @type {Set<number>}
   */
  #answerNumbers;

  getCountResult(playerNumbers) {
    return this.#setPlayerNumbers(playerNumbers).reduce(
      (countResult, playerNumber, playerNumberIndex) =>
        this.#calculateCountResult({
          countResult,
          playerNumber,
          playerNumberIndex,
        }),
      { strike: 0, ball: 0 }
    );
  }

  #calculateCountResult({ countResult, playerNumber, playerNumberIndex }) {
    if (!this.#answerNumbers.has(playerNumber)) return countResult;
    if (this.#isStrike({ playerNumber, playerNumberIndex })) {
      countResult.strike += 1;
    } else {
      countResult.ball += 1;
    }
    return countResult;
  }

  createAnswerNumbers() {
    this.#answerNumbers = this.#createRandomUniqueNumberList();
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
