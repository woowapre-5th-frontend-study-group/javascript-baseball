//View(입출력)
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

//Model
const ComputerAnswer = require("../Model/BaseballGame");

//Controller는 View와 Model 사이의 인터페이스 역할
//비즈니스 로직과 이벤트를 처리함
class GameController {
  start() {
    OutputView.printStartMsg();
  }
}

module.exports = GameController;
