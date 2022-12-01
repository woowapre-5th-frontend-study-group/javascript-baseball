const GameManager = require('./Controller/GameManager');

class App {
  play() {
    new GameManager();
  }
}

const app = new App();
app.play();

module.exports = App;
