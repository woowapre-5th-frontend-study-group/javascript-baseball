/** 게임코어 및 게임상태 객체 import */
const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");

/** View Import */
const OutputView = require("../Views/OutputView");

/** 상수 import */
const { SCENE, BASEBALL } = require("../Constants");

/* #region Private Method 정의 */
/**
 * 3스트라이크인지 확인한다.
 *
 * @param {number} strikeCount
 * @returns {boolean}
 */
function isThreeStrike(strikeCount) {
  return strikeCount === BASEBALL.THREE_STRIKE;
}
/* #endregion */

const PrintHintScene = {
  start() {
    const compareResult = GameState.getCompareResult();
    OutputView.printHint(compareResult);

    if (isThreeStrike(compareResult.strikeCount)) {
      OutputView.printGameClear();
      GameCore.playScene(SCENE.GetRetry);
      return;
    }

    GameCore.playScene(SCENE.GetNumber);
  },
};

module.exports = PrintHintScene;
