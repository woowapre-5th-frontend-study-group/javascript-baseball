const GameController = require("./Controller/GameController");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_START_MESSAGE } = require("./utils/constants");

class App {
  play() {
    new GameController().gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
