/**
 * 숫자로 변환한다.
 *
 * @param {number|string} value
 * @returns {number}
 */
function convertToNumber(value) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    return +value;
  }
}

/**
 * 숫자 Array를 반환한다.
 *
 * @param {string} value
 * @returns {Array<number>}
 */
function convertToNumberArray(value) {
  return value.split("").map((item) => convertToNumber(item));
}

const Utils = {
  convertToNumber,
  convertToNumberArray,
};

module.exports = Utils;
