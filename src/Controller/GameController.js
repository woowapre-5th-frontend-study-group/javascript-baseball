const { Console } = require("@woowacourse/mission-utils");

const { ALL_CORRECT, COMMAND } = require("../utils/constants");
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

  restartGame() {
    this.startGame();
  }

  askCommand() {
    InputView.readCommand((command) => {
      if (command == COMMAND.RESTART) return this.restartGame();
      if (command == COMMAND.END) return Console.close();
    });
  }

  checkThreeStrike(strikeCount) {
    if (strikeCount == ALL_CORRECT) return this.askCommand();
    return this.askGuessNum();
  }

  showGuessResult(guess) {
    const guessResult = this.#baseball.compareWithAnswer(guess);
    OutputView.printGuessResult(guessResult);
    this.checkThreeStrike(guessResult.strikeCount);
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

  startGame() {
    OutputView.printStartMsg();
    this.#baseball = new Baseball();
    this.askGuessNum();
  }
}

module.exports = GameController;
