const { Random } = require('@woowacourse/mission-utils');

class ComputerAnswer {
  #value;

  constructor() {
    this.#createValue();
  }

  #createValue() {
    let numbers = new Set();
    while (numbers.size < 3) {
      const num = Random.pickNumberInRange(1, 9);
      numbers.add(num);
    }

    this.#value = [...numbers].join('');
  }

  comparePlayerAnswer(playerAnswer) {
    let ballCount = 0;
    let strikeCount = 0;

    [...playerAnswer].forEach((number, idx) => {
      if (!this.#value.includes(number)) return;

      if (this.#value[idx] === number) return (strikeCount += 1);

      ballCount += 1;
    });

    return { ballCount, strikeCount };
  }

  isThreeStrike(playerAnswer) {
    return this.#value === playerAnswer;
  }
}

module.exports = ComputerAnswer;
