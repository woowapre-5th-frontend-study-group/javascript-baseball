const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const GUESS_INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const GAME_COMMAND_MESSAGE =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

const GUESS_RESULT = {
  NOTHING: "낫싱",
  THREE_STRIKE: "3스트라이크",
};

const ALL_CORRECT = 3;

const COMMAND = {
  RESTART: 1,
  END: 2,
};

const BASE_MESSAGE = "[ERROR] ";
const ERROR_MESSAGE = {
  NOT_NUMBER: BASE_MESSAGE + "숫자만 입력해 주세요.",
  THREE_DIGIT: BASE_MESSAGE + "3개의 숫자를 입력해주세요.",
  DUPLICATE: BASE_MESSAGE + "중복된 숫자가 있습니다.",
  RANGE_ERROR: BASE_MESSAGE + "1부터 9까지 숫자만 입력해주세요",
};

module.exports = {
  GAME_START_MESSAGE,
  GUESS_INPUT_MESSAGE,
  GAME_COMMAND_MESSAGE,
  GUESS_RESULT,
  ALL_CORRECT,
  COMMAND,
  ERROR_MESSAGE,
};
