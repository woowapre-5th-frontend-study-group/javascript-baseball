const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");
const InputView = require("../Views/InputView");
const ExceptionHandler = require("../Utils/ExceptionHandler");
const { SCENE, INPUT_TYPE } = require("../Constants");

const { convertToNumberArray } = require("../Utils/Utils.js");

const GetNumberScene = {
  start() {
    InputView.questionNumber(GetNumberScene.nextCallback);
  },

  nextCallback(inputedValue) {
    const validateResult = ExceptionHandler.tryValidate(
      inputedValue,
      INPUT_TYPE.NUMBER
    );

    if (!validateResult) {
      GameCore.replayCurrentScene();
      return;
    }

    const convertedValue = convertToNumberArray(inputedValue);
    GameState.setUserGong(convertedValue);

    // GameCore.nextScene();
    GameCore.playScene(SCENE.PrintHint);
  },
};

module.exports = GetNumberScene;
