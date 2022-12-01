const InputValidation = require("../utils/InputValidation");
//View(입출력)
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

//Model
const Computer = require("../Model/Computer");

//Controller는 View와 Model 사이의 인터페이스 역할
//비즈니스 로직과 이벤트를 처리함
class GameController {
  #gameAnswer;

  constructor() {
    this.#gameAnswer = Computer.generateAnswer();
  }

  start() {
    OutputView.printStartMsg();
    console.log(this.#gameAnswer);
    this.askGuessNums();
  }

  askGuessNums() {
    InputView.readPlayerGuess((guessNums) => {
      InputValidation.isValid(guessNums);
    });
  }
}

module.exports = GameController;
