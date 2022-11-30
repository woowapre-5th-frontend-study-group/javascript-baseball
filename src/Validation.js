const { COMMAND, NUMBER_DIGITS } = require("./constants/game");
const { ERROR_MESSAGE } = require("./constants/messages");

class Validation {
  /**
   * 플레이어 입력값 유효성 검사
   * @param {string} playerInputValue
   */
  static checkPlayerNumbers(playerNumbers) {
    if (!this.#isCorrectPlayerInputValue(playerNumbers)) {
      throw new Error(ERROR_MESSAGE.playerInput);
    }
  }

  /**
   * 플레이어 게임 재시작 커멘드 입력 유효성 검사
   * @param {string} gameCommand
   */
  static checkGameCommand(gameCommand) {
    if (!this.#isCorrectGameCommand(Number(gameCommand))) {
      throw new Error(ERROR_MESSAGE.gameCommand);
    }
  }

  static #isCorrectPlayerInputValue(playerInputValue) {
    return (
      !Number.isNaN(Number(playerInputValue)) &&
      this.#isThreeDigits(playerInputValue) &&
      !this.#isIncludesZero(playerInputValue) &&
      this.#isUniqueNumbers(playerInputValue)
    );
  }

  static #isCorrectGameCommand(gameCommand) {
    return gameCommand === COMMAND.restart || gameCommand === COMMAND.quit;
  }

  static #isThreeDigits(string) {
    return string.length === NUMBER_DIGITS;
  }
  static #isIncludesZero(string) {
    return string.includes("0");
  }
  static #isUniqueNumbers(string) {
    const numberList = string.split("");
    const uniqueNumberList = new Set(numberList);
    return uniqueNumberList.size === NUMBER_DIGITS;
  }
}

module.exports = Validation;
