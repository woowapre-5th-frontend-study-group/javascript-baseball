const InputValidation = require("../utils/InputValidation");
//View(입출력)
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

//Model
const Computer = require("../Model/Computer");
const Baseball = require("../Model/Baseball");

//Controller는 View와 Model 사이의 인터페이스 역할
//비즈니스 로직과 이벤트를 처리함
class GameController {
  #baseball;

  constructor() {
    this.#baseball;
  }

  showGuessResult(guess) {
    const guessResult = this.#baseball.compareWithAnswer(guess);
    OutputView.printGuessResult(guessResult);
  }

  askGuessNum() {
    InputView.readPlayerGuess((guessNum) => {
      const guessNumArr = Array.from(guessNum).map((i) => Number(i));
      //console.log(guessNumArr);
      InputValidation.isValid(guessNum);
      console.log(this.#baseball.getAnswer());
      this.showGuessResult(guessNumArr);
    });
  }

  gameStart() {
    OutputView.printStartMsg();
    this.#baseball = new Baseball();
    this.askGuessNum();
  }
}

module.exports = GameController;
