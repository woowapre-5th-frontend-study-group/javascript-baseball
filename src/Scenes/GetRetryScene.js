const InputView = require("../Views/InputView");
const ExceptionHandler = require("../Utils/ExceptionHandler");
const GameCore = require("../Domains/GameCore");
const { SCENE, INPUT_TYPE, GAME_COMMAND } = require("../Constants");

const GetRetryScene = {
  start() {
    InputView.questionRetry(GetRetryScene.testCallback);
  },

  testCallback(inputedValue) {
    const validateResult = ExceptionHandler.tryValidate(
      inputedValue,
      INPUT_TYPE.GAME_COMMAND
    );

    if (!validateResult) {
      GameCore.replayCurrentScene();
      return;
    }

    const nextScene = {
      [GAME_COMMAND.NEW_GAME]: SCENE.CreateAnswer,
      [GAME_COMMAND.EXIT]: SCENE.Outro,
    };

    GameCore.playScene(nextScene[inputedValue]);
  },
};

module.exports = GetRetryScene;
