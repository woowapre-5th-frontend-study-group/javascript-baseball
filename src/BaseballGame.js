const { Random } = require("@woowacourse/mission-utils");
const { COUNT, NUMBER_DIGITS } = require("./constants/game");

class BaseBallGame {
  /**
   * 정답 숫자
   * @type {Set<number>}
   */
  #answerNumbers;

  /**
   * 플레이어 입력 숫자
   * @type {number[]}
   */
  #playerNumbers;

  /**
   * 볼 스트라이크 개수
   * @type  {{ ball: number, strike: number }}
   */
  #count;

  setAnswerNumbers() {
    this.#answerNumbers = this.#createRandomUniqueNumberList();
  }

  setPlayerNumbers(playerNumbers) {
    this.#playerNumbers = playerNumbers.split("").map(Number);
  }

  isAnswer() {
    return this.#count.strike === COUNT.out;
  }

  getCount() {
    this.#resetCount();
    this.#playerNumbers.forEach(this.#calculateCount.bind(this));
    return this.#count;
  }

  #calculateCount(playerNumber, playerNumberIndex) {
    if (!this.#answerNumbers.has(playerNumber)) return;
    if (this.#isStrike({ playerNumber, playerNumberIndex })) {
      return (this.#count.strike += 1);
    }
    this.#count.ball += 1;
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

  #resetCount() {
    this.#count = { ...COUNT.initialization };
  }

  #isStrike({ playerNumber, playerNumberIndex }) {
    const answerNumbers = [...this.#answerNumbers];
    return answerNumbers[playerNumberIndex] === playerNumber;
  }
}

module.exports = BaseBallGame;
