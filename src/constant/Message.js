const { VALUE } = require("./Value");

const MESSAGE = {
  START_GAME: "숫자 야구 게임을 시작합니다.",

  GAME_RESULT: {
    BALL_STRIKE: (ball, strike) =>
      ball && strike
        ? `${ball}볼 ${strike}스트라이크`
        : ball
        ? `${ball}볼`
        : `${strike}스트라이크`,
    NOTHING: "낫싱",
    CONGRATURATION: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  },

  INPUT: {
    NUMBER: "숫자를 입력해주세요 : ",
    COMMAND: `게임을 새로 시작하려면 ${VALUE.COMMAND.RESTART}, 종료하려면 ${VALUE.COMMAND.FINISH}를 입력하세요.\n`,
  },
};

module.exports = { MESSAGE };
