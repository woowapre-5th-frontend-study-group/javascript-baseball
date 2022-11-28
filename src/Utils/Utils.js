const { Random } = require("@woowacourse/mission-utils");

function convertToNumber(value) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    return +value;
  }
}

/**
 *
 * @param {string} value
 * @returns
 */
function convertToNumberArray(value) {
  return value.split("").map((item) => convertToNumber(item));
}

function makeAnswerGongNumbers() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

const Utils = {
  convertToNumber,
  convertToNumberArray,
  makeAnswerGongNumbers,
};

module.exports = Utils;
