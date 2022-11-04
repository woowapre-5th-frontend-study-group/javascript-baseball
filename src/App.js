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
        return [this.countStrike(userNumbers), this.countBall(userNumbers)];
    }

    printHint(ballCount, strikeCount) {
        let hintString = '';

        if (!strikeCount && !ballCount) {
            hintString = '낫싱';
        }

        if (ballCount) {
            hintString = `${ballCount}볼`;
        }

        if (strikeCount) {
            hintString =
                hintString !== ''
                    ? `${hintString} ${strikeCount}스트라이크`
                    : `${strikeCount}스트라이크`;
        }

        Console.print(hintString);
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

    startBaseballGame() {
        while (true) {
            let userNumbers = [];
            Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
                if (this.invalidateNumber(inputNumber)) {
                    throw Error('잘못된 값을 입력하였습니다.');
                }

                userNumbers = this.convertToNumberArray(inputNumber);
                // Console.print('userNumbers: ' + userNumbers);
                console.log(this.returnHint(userNumbers));
            });

            // Console.close();
        }
    }

    convertToNumberArray(array) {
        return [...array].map((item) => +item);
    }

    invalidateNumber(numbers) {
        return !(
            this._isNumber(numbers) &&
            this._hasNoDuplication(numbers) &&
            this._isThreeNumber(numbers) &&
            this._isInRangeFromOneToNine(numbers)
        );
    }

    _isNumber = (source) => !isNaN(parseInt(source, 10));

    _hasNoDuplication = (numbers) =>
        ![...numbers].some((number) => numbers.split(number).length > 2);

    _isThreeNumber = (numbers) => numbers.length === 3;

    _isInRangeFromOneToNine = (numbers) =>
        [...numbers].every((number) => +number >= 1 && +number <= 9);

    play() {
        Console.print('숫자 야구 게임을 시작합니다.');
        this.pickComputerNumber();
        this.startBaseballGame();
    }
}

module.exports = App;
