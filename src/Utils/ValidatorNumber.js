const Validator = require("./Validator");
const { convertToNumber } = require("./Utils");

/** 책임 연쇄 패턴(chain of responsibility)을 적용한 유효성 검사 클래스 */
class ValidatorNumber extends Validator {
  /** @type {string} 유효성 검사를 받을 대상 */
  #data;
  /** @type {boolean} 예외 발생 유무 */
  #error;

  constructor(value) {
    super();
    this.#data = value;
  }

  /**
   * 앞선 조건들에서 오류가 발생했을 때 throw를 던진다.
   *
   * @param {string} message 에러 메시지
   * @returns {ValidatorNumber}
   */
  withMessage(message) {
    if (this.#error) throw message;
    return this;
  }

  /** 체인이 끝나고(유효성 검사가 끝나고) 값을 받아온다. */
  get() {
    if (this.#error) return null;
    return this.#data;
  }

  /** 비어있지 않아야 한다. */
  shouldBeNotEmpty() {
    if (this.#data === "") this.#error = true;
    return this;
  }

  /** 길이가 3이여야 한다. */
  shouldBeThree() {
    if ([...this.#data].length !== 3) this.#error = true;
    return this;
  }

  /** 숫자여야 한다. */
  shouldBeNumberic() {
    const convetedData = convertToNumber(this.#data);

    if (
      typeof convetedData !== "number" ||
      Number.isNaN(convetedData) ||
      !Number.isFinite(convetedData)
    ) {
      this.#error = true;
    }

    return this;
  }

  /** 서로 다른 숫자(배타적)이어야 한다. */
  shouldBeExclusive() {
    const exclusiveSet = new Set([...this.#data]);
    if (exclusiveSet.size !== [...this.#data].length) {
      this.#error = true;
    }

    return this;
  }
}

module.exports = ValidatorNumber;
