/** 게임코어 및 게임상태 객체 import */
const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");

/** 유틸 import */
const { Random } = require("@woowacourse/mission-utils");

/** 상수 import */
const { SCENE } = require("../Constants");

/* #region Private Method 정의 */
/**
 * 서로 겹치지 않는 랜덤한 숫자 3개를 뽑아 정답 숫자로 반환한다.
 *
 * @returns {Array<number>}
 */
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
/* #endregion */

const CreateAnswerScene = {
  start() {
    const gongNumbers = makeAnswerGongNumbers();
    GameState.setAnswerGong(gongNumbers);

    // GameCore.nextScene();
    GameCore.playScene(SCENE.GetNumber);
  },
};

module.exports = CreateAnswerScene;
