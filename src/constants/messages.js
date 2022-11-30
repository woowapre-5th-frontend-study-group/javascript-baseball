const { deepFreeze } = require("../utils");

const INPUT_MESSAGE = {
  playerInput: "숫자를 입력해주세요 : ",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const OUTPUT_MESSAGE = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  nothing: "낫싱",
  strike: "스트라이크",
  ball: "볼",
};

const ERROR_MESSAGE = {
  playerInput: "1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력하세요",
  restart: "1과 2중 올바른 숫자를 입력하세요",
};

const exportsMessages = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
};

deepFreeze(exportsMessages);

module.exports = exportsMessages;
