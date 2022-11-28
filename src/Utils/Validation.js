// 책임 연쇄 패턴으로 구현 예정

const Validation = {
  validateNumber(value) {
    if (isNaN(+value)) {
      throw "에러~";
    }

    return true;
  },

  validateGameCommand(value) {
    if (!(value === "1" || value === "2")) {
      throw "에러~";
    }

    return true;
  },
};

module.exports = Validation;
