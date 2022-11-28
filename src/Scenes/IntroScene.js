const GameCore = require("../Domains/GameCore");
const OutputView = require("../Views/OutputView");

const IntroScene = {
  start() {
    OutputView.printIntroMessage();

    // GameCore.playScene(SCENE.CreateAnswer);
    GameCore.nextScene();
  },
};

module.exports = IntroScene;
