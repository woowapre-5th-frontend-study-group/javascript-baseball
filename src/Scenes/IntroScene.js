/** 게임코어 import */
const GameCore = require("../Domains/GameCore");

/** View Import */
const OutputView = require("../Views/OutputView");

/** 상수 import */
const { SCENE } = require("../Constants");

const IntroScene = {
  start() {
    OutputView.printIntroMessage();

    // GameCore.nextScene();
    GameCore.playScene(SCENE.CreateAnswer);
  },
};

module.exports = IntroScene;
