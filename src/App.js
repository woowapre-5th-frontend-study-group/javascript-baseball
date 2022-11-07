const { Console } = require("@woowacourse/mission-utils");
const BaseBallGame = require("./BaseballGame");

const { GAME_SENTENCE } = require("./constants");

class App {
  play() {
    Console.print(GAME_SENTENCE.START);
    new BaseBallGame();
  }
}

const app = new App();
app.play();
module.exports = App;
