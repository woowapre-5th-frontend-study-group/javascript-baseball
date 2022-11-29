/** 게임코어 및 게임상태 객체 import */
const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");

/** View Import */
const InputView = require("../Views/InputView");

/** 유틸 import */
const ExceptionHandler = require("../Utils/ExceptionHandler");
const { convertToNumberArray } = require("../Utils/Utils.js");

/** 상수 import */
const { SCENE, INPUT_TYPE } = require("../Constants");

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
