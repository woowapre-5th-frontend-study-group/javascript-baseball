class Gong {
  /** @type {Set<number>} */
  #myGong;

  /** @param {Array<number>} gong */
  constructor(gong) {
    this.#myGong = new Set(gong);
  }

  /**
   *
   * @param {number} index
   * @returns {number}
   */
  getNumber(index) {
    return [...this.#myGong][index];
  }

  getGongNumbers() {
    return [...this.#myGong];
  }

  /**
   *
   * @param {number} number 확인할 숫자
   * @returns {boolean}
   */
  include(number) {
    return this.#myGong.has(number);
  }

  /**
   * index에 있는 숫자가 정확히 그 숫자
   *
   * @param {number} gongNumber
   * @param {number} index
   * @returns {boolean}
   */
  compareAtIndex(gongNumber, index) {
    return this.getNumber(index) === gongNumber;
  }

  /**
   *
   * @param {Gong} anotherGong
   * @returns {{ballCount: number, strikeCount: number}}
   */
  compare(anotherGong) {
    const gongEntry = anotherGong.getGongNumbers();
    let [ballCount, strikeCount] = [0, 0];

    gongEntry.forEach((gongNumber, index) => {
      const isIncludedNumber = this.include(gongNumber);
      const isExactlyNumber = this.compareAtIndex(gongNumber, index);

      if (isExactlyNumber) {
        strikeCount += 1;
        return false;
      }

      if (isIncludedNumber) {
        ballCount += 1;
      }
    });

    return { ballCount, strikeCount };
  }

  get [Symbol.toStringTag]() {
    return `${[...this.#myGong.keys()].join(", ")}`;
  }
}

module.exports = Gong;
