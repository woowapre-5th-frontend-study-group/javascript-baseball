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
        ).length;
    }

    async startBaseballGame() {
        const userNumber = await this.inputNumber();
        const isInvalidation = this.invalidateNumber(userNumber);

        if (isInvalidation) {
            throw new Error('잘못된 값을 입력하였습니다.');
        }

        const numberArray = this.convertToNumberArray(userNumber);
        // console.log(this._computerNumber, numberArray);
        const [strikeCount, ballCount] = this.returnHint(numberArray);
        this.printHint(ballCount, strikeCount);

        const THREE_STRIKE = 3;

        if (strikeCount === THREE_STRIKE) {
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            const goContinue = await this.continueGame();
            const [NEW_GAME, GAME_END] = ['1', '2'];
            return goContinue === NEW_GAME ? NEW_GAME : GAME_END;
        }

        const CONTINUE_GAME = '3';
        return CONTINUE_GAME;
    }

    inputNumber() {
        return new Promise((resolve, _) => {
            Console.readLine('숫자를 입력해주세요 : ', resolve);
        });
    }

    continueGame() {
        return new Promise((resolve, _) => {
            Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', resolve);
        });
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

    async play() {
        Console.print('숫자 야구 게임을 시작합니다.');

        this.pickComputerNumber();
        while (true) {
            const gameResult = await this.startBaseballGame();

            const [NEW_GAME, GAME_END, CONTINUE_GAME] = ['1', '2', '3'];

            if (gameResult === NEW_GAME) {
                this.pickComputerNumber();
            } else if (gameResult === GAME_END) {
                break;
            } else if (gameResult === CONTINUE_GAME) {
            }
        }
    }
}

module.exports = App;
