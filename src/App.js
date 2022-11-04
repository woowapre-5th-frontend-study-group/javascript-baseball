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

    returnHint(userNumbers) {
        const [strikeCount, ballCount] = [
            this.countStrike(userNumbers),
            this.countBall(userNumbers),
        ];

        console.log('computeNumber: ' + this._computerNumber);
        console.log('strikeCount: ' + strikeCount);
        console.log('ballCount: ' + ballCount);
    }

    countStrike(userNumbers) {
        return userNumbers.filter((userNumber, index) => userNumber === this._computerNumber[index])
            .length;
    }

    countBall(userNumbers) {
        return userNumbers.filter(
            (userNumber, index) =>
                this._computerNumber.includes(userNumber) &&
                this._computerNumber[index] !== userNumber
        );
    }

    play() {
        Console.print('숫자 야구 게임을 시작합니다.');
        this.pickComputerNumber();
        this.startBaseballGame();
    }
}

module.exports = App;
