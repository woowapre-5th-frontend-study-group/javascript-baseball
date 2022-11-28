const Constants = {
  SCENE: {
    Intro: 0,
    CreateAnswer: 1,
    GetNumber: 2,
    PrintHint: 3,
    GetRetry: 4,
    Outro: 5,
  },

  OUTPUT: {
    INTRO_MESSAGE: "숫자 야구 게임을 시작합니다.",
    OUTRO_MESSAGE: "숫자 야구 게임을 종료합니다.",
    GAME_CLEAR: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    NULL: "",
  },

  INPUT: {
    NUMBER_QUESTION: "숫자를 입력해주세요 : ",
    GAME_COMMAND_QUESTION:
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  },

  BASEBALL: {
    BALL: "볼",
    STRIKE: "스트라이크",
    NOTHING: "낫싱",
    NULL: "",
    DELIMITER: " ",
    THREE_STRIKE: 3,
  },

  ERROR: {
    HEADING: "[ERROR]",
  },

  INPUT_TYPE: {
    NUMBER: "Number",
    GAME_COMMAND: "GameCommand",
  },

  GAME_COMMAND: {
    NEW_GAME: "1",
    EXIT: "2",
  },
};

module.exports = Constants;
