const { Random } = require('@woowacourse/mission-utils');

class ComputerAnswer {
  #value;

  constructor() {
    this.#createValue();
  }

  #createValue() {
    let numbers = [];
    while (numbers.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      numbers.push(num);
      numbers = [...new Set(numbers)];
    }

    this.#value = numbers.join('');
  }

  resetValue() {
    this.#createValue();
  }

  comparePlayerAnswer(playerAnswer) {
    let ballCount = 0;
    let strikeCount = 0;

    [...playerAnswer].forEach((number, idx) => {
      if (![...this.#value].includes(number)) return;

      if (this.#value[idx] === number) strikeCount += 1;
      else ballCount += 1;
    });

    return { ballCount, strikeCount };
  }

  isThreeStrike(playerAnswer) {
    return this.#value === playerAnswer;
  }
}

module.exports = ComputerAnswer;
