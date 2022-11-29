/** @type {Array<Object>} */
let _sceneList = [];

/** @type {number} */
let _currentScene = 0;

/** 장면을 handle하는 객체 */
const GameCore = {
  /** 현재 장면을 반환합니다. */
  getCurrentScene() {
    return _currentScene;
  },

  /**
   * 현재 장면을 설정합니다.
   *
   * @param {SCENE} currentScene
   */
  setCurrentScene(currentScene) {
    _currentScene = currentScene;
  },

  /**
   * 장면을 추가합니다.
   *
   * @param {Object} scene 추가할 장면
   * @returns GameCore
   */
  addScene(scene) {
    _sceneList.push(scene);
    return this;
  },

  /**
   * 장면을 재생합니다.
   *
   * @param {SCENE} sceneNumber
   */
  playScene(sceneNumber = 0) {
    this.setCurrentScene(sceneNumber);

    const startFunction = _sceneList[sceneNumber]["start"];
    startFunction();
  },

  /** 현재 장면을 리플레이합니다. */
  replayCurrentScene() {
    const startFunction = _sceneList[_currentScene]["start"];
    startFunction();
  },

  /**
   * 다음 장면을 재생합니다.
   *
   * @deprecated nextScene()를 사용하기보다 playScene()을 이용해 어떤 장면으로 넘어갈 것인지 명시해주는 것이 코드의 흐름을 파악하는데 도움이 됩니다.
   */
  nextScene() {
    if (_currentScene + 1 >= _sceneList.length) {
      throw "다음 장면 없음 ~";
    }

    this.playScene(_currentScene + 1);
  },
};

module.exports = GameCore;
