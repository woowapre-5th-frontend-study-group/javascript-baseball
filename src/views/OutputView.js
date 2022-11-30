const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/Message");

const OutputView = {
  printGameStartMessage() {
    MissionUtils.Console.print(MESSAGE.START_GAME);
  },

  printResult(ball, strike) {
    if (strike === 3) {
      MissionUtils.Console.print(MESSAGE.GAME_RESULT.BALL_STRIKE(ball, strike));
      MissionUtils.Console.print(MESSAGE.GAME_RESULT.CONGRATURATION);
    } else if (strike !== 3) {
      this.continue(ball, strike);
    }
  },
  continue(ball, strike) {
    ball || strike
      ? MissionUtils.Console.print(
          MESSAGE.GAME_RESULT.BALL_STRIKE(ball, strike)
        )
      : MissionUtils.Console.print(MESSAGE.GAME_RESULT.NOTHING);
  },
};

module.exports = OutputView;
