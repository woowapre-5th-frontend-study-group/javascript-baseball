const GameCore = require("../Domains/GameCore");
const OutputView = require("../Views/OutputView");
const { SCENE } = require("../Constants");

const IntroScene = {
  start() {
    OutputView.printIntroMessage();

    // GameCore.nextScene();
    GameCore.playScene(SCENE.CreateAnswer);
  },
};

module.exports = IntroScene;
