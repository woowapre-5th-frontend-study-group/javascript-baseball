const GameCore = require("./Domains/GameCore");
const Scenes = require("./Scenes");

class App {
  constructor() {
    GameCore.addScene(Scenes.IntroScene)
      .addScene(Scenes.CreateAnswerScene)
      .addScene(Scenes.GetNumberScene)
      .addScene(Scenes.PrintHintScene)
      .addScene(Scenes.GetRetryScene)
      .addScene(Scenes.OutroScene);
  }

  play() {
    GameCore.playScene();
  }
}

module.exports = App;
