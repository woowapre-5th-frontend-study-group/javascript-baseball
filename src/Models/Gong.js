/** 공에 대한 모델 */
class Gong {
  /** @type {Set<number>} */
  #myGong;

  /** @param {Array<number>} gong */
  constructor(gong) {
    this.#myGong = new Set(gong);
  }

  /**
   * Index에 맞는 숫자를 반환한다.
   *
   * @param {number} index
   * @returns {number}
   */
  getNumber(index) {
    return [...this.#myGong][index];
  }

  /**
   * 숫자를 반환한다.
   * @returns {Array<number>}
   */
  getGongNumbers() {
    return [...this.#myGong];
  }

  /**
   * 해당 숫자가 포함되어 있는지 반환한다.
   *
   * @param {number} number 확인할 숫자
   * @returns {boolean}
   */
  include(number) {
    return this.#myGong.has(number);
  }

  /**
   * index에 있는 숫자가 정확히 그 숫자인지 비교한다.
   *
   * @param {number} gongNumber
   * @param {number} index
   * @returns {boolean}
   */
  compareAtIndex(gongNumber, index) {
    return this.getNumber(index) === gongNumber;
  }

  /**
   * 입력받은 인수와 비교하여 볼과 스트라이크 갯수를 반환한다.
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
