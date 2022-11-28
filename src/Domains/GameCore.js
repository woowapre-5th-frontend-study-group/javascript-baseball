let _sceneList = [];
let _currentScene = 0;

const GameCore = {
  getCurrentScene() {
    return _currentScene;
  },

  setCurrentScene(currentScene) {
    _currentScene = currentScene;
  },

  addScene(scene) {
    _sceneList.push(scene);
    return this;
  },

  playScene(sceneNumber = 0) {
    this.setCurrentScene(sceneNumber);

    const startFunction = _sceneList[sceneNumber]["start"];
    startFunction();
  },

  replayCurrentScene() {
    const startFunction = _sceneList[_currentScene]["start"];
    startFunction();
  },

  nextScene() {
    if (_currentScene + 1 >= _sceneList.length) {
      throw "다음 장면 없음 ~";
    }

    this.playScene(_currentScene + 1);
  },
};

module.exports = GameCore;
