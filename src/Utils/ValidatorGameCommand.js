/** Validator 구현을 위한 추상 클래스 Import */
const Validator = require("./Validator");

/**
 * 빈 값인지 확인한다.
 *
 * @param {string} value
 * @returns {boolean}
 */
function isEmpty(value) {
  return value === "";
}

/**
 * 길이가 1인지 확인한다.
 *
 * @param {string} value
 * @returns {boolean}
 */
function isLengthOne(value) {
  return [...value].length === 1;
}

/** 책임 연쇄 패턴(chain of responsibility)을 적용한 유효성 검사 클래스 */
class ValidatorGameCommand extends Validator {
  #data;
  #error;

  constructor(value) {
    super();
    this.#data = value;
  }

  /**
   * 앞선 조건들에서 오류가 발생했을 때 throw를 던진다.
   *
   * @param {string} message 에러 메시지
   * @returns {this}
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
    if (isEmpty(this.#data)) this.#error = true;
    return this;
  }

  /** 값을 하나만 받아야 한다. */
  shouldBeOneInput() {
    if (!isLengthOne(this.#data)) this.#error = true;
    return this;
  }

  /** 값이 인자값들 중 한 개여야 한다. */
  shouldBeOne(...array) {
    if (!array.includes(this.#data)) this.#error = true;
    return this;
  }
}

module.exports = ValidatorGameCommand;
