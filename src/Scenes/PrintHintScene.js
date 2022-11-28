const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");
const OutputView = require("../Views/OutputView");
const { SCENE, BASEBALL } = require("../Constants");

const PrintHintScene = {
  start() {
    console.log(GameState.getAnswerGong());

    const compareResult = GameState.getCompareResult();
    OutputView.printHint(compareResult);

    if (compareResult.strikeCount === BASEBALL.THREE_STRIKE) {
      OutputView.printGameClear();
      GameCore.playScene(SCENE.GetRetry);
      return;
    }

    GameCore.playScene(SCENE.GetNumber);
  },
};

module.exports = PrintHintScene;
