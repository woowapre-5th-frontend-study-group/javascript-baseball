/** Validator 구현을 위한 추상 클래스 Import */
const Validator = require("./Validator");

/** 유틸 import */
const { convertToNumber } = require("./Utils");

/* #region Private Method 정의 */
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
 * 길이가 3인지 확인한다.
 *
 * @param {string} value
 * @returns {boolean}
 */
function isLengthThree(value) {
  return [...value].length === 3;
}

/**
 * 숫자인지 확인한다.
 *
 * @param {any} value
 * @returns {boolean}
 */
function isNumberic(value) {
  return (
    typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value)
  );
}

/**
 * A와 B가 같은지 확인한다.
 *
 * @param {any} valueA
 * @param {any} valueB
 * @returns {boolean}
 */
function isSame(valueA, valueB) {
  return valueA === valueB;
}
/* #endregion */

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
    if (isEmpty(this.#data)) this.#error = true;
    return this;
  }

  /** 길이가 3이여야 한다. */
  shouldBeThree() {
    if (!isLengthThree(this.#data)) this.#error = true;
    return this;
  }

  /** 숫자여야 한다. */
  shouldBeNumberic() {
    const convetedData = convertToNumber(this.#data);
    if (!isNumberic(convetedData)) this.#error = true;

    return this;
  }

  /** 서로 다른 숫자(배타적)이어야 한다. */
  shouldBeExclusive() {
    const dataArray = [...this.#data];
    const exclusiveSet = new Set(dataArray);
    if (!isSame(exclusiveSet.size, dataArray.length)) this.#error = true;

    return this;
  }
}

module.exports = ValidatorNumber;
