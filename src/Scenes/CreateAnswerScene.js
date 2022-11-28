const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");
const { makeAnswerGongNumbers } = require("../Utils/Utils.js");

const CreateAnswerScene = {
  start() {
    const gongNumbers = makeAnswerGongNumbers();
    GameState.setAnswerGong(gongNumbers);

    // GameCore.playScene(SCENE.GetNumber);
    GameCore.nextScene();
  },
};

module.exports = CreateAnswerScene;
