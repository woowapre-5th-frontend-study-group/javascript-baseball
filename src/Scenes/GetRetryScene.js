const InputView = require("../Views/InputView");
const ExceptionHandler = require("../Utils/ExceptionHandler");
const GameCore = require("../Domains/GameCore");
const { SCENE, INPUT_TYPE, GAME_COMMAND } = require("../Constants");
const OutputView = require("../Views/OutputView");

const GetRetryScene = {
  start() {
    InputView.questionRetry(GetRetryScene.nextCallback);
  },

  nextCallback(inputedValue) {
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

    OutputView.addNewLine();
    GameCore.playScene(nextScene[inputedValue]);
  },
};

module.exports = GetRetryScene;
