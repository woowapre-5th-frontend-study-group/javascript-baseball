const { Random, Console } = require('@woowacourse/mission-utils');

class App {
    constructor() {}

    pickComputerNumber() {
        let randomNumber = [];
        while (randomNumber.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!randomNumber.includes(number)) {
                randomNumber.push(number);
            }
        }

        this._computerNumber = randomNumber;
    }

    play() {
        Console.print('숫자 야구 게임을 시작합니다.');
        this.pickComputerNumber();
        this.startBaseballGame();
    }
}

module.exports = App;
