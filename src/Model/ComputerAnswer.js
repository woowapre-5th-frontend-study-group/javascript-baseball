const { Random } = require('@woowacourse/mission-utils');

class ComputerAnswer {
  #value;

  constructor() {
    this.#setValue();
  }

  #setValue() {
    const numberArr = [];
    while (numberArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }

    this.#value = numberArr.join('');
  }

  resetValue() {
    this.#setValue();
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
