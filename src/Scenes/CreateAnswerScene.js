const GameCore = require("../Domains/GameCore");
const GameState = require("../Domains/GameState");
const { makeAnswerGongNumbers } = require("../Utils/Utils.js");
const { SCENE } = require("../Constants");

const CreateAnswerScene = {
  start() {
    const gongNumbers = makeAnswerGongNumbers();
    GameState.setAnswerGong(gongNumbers);

    // GameCore.nextScene();
    GameCore.playScene(SCENE.GetNumber);
  },
};

module.exports = CreateAnswerScene;
