const { Random, Console } = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this._running = false;
        this._computerNumbers = [];
        this._userNumbers = [];
        this._newComputerPick = true;
    }

    /* #region About member getter/setter */
    getComputerNumbers() {
        return this._computerNumbers;
    }

    setComputerNumbers(computerNumbers) {
        this._computerNumbers = computerNumbers;
    }

    getGameState() {
        return this._running;
    }

    setGameState(running) {
        this._running = running;
    }

    getUserNumbers() {
        return this._userNumbers;
    }

    setUserNumbers(userNumbers) {
        this._userNumbers = userNumbers;
    }

    getNewComputerPick() {
        return this._newComputerPick;
    }

    setNewComputerPick(newComputerPick) {
        this._newComputerPick = newComputerPick;
    }
    /* #endregion */

    play() {
        Console.print('숫자 야구 게임을 시작합니다.');

        this.setGameState(true);
        this.gameLoop();
    }

    gameLoop() {
        const END_GAME = false;
        const gameState = this.getGameState();
        if (gameState === END_GAME) {
            Console.print('게임 종료!');
            Console.close();
            return;
        }

        const newComputerPick = this.getNewComputerPick();
        if (newComputerPick) {
            this.pickComputerNumber();
            this.setNewComputerPick(false);
        }

        this.inputNumber((inputNumber) => {
            const isInvalidatedNumber = this.invalidateNumber(inputNumber);
            if (isInvalidatedNumber) {
                throw new Error('inputNumber, 잘못된 값을 입력하였습니다.');
            }

            const numberArray = this.convertToNumberArray(inputNumber);
            this.setUserNumbers(numberArray);

            console.log(`cn: ${this._computerNumbers} / un: ${this._userNumbers}`);

            const [strikeCount, ballCount] = this.compareNumbers();
            this.printHint(strikeCount, ballCount);
            this.checkThreeStrike(strikeCount);
        });
    }

    pickComputerNumber() {
        let randomNumbers = [];
        while (randomNumbers.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!randomNumbers.includes(number)) {
                randomNumbers.push(number);
            }
        }

        this._computerNumbers = randomNumbers;
    }

    inputNumber(callback) {
        Console.readLine('숫자를 입력해주세요 : ', callback);
        // return new Promise((resolve, _) => {
        //     Console.readLine('숫자를 입력해주세요 : ', resolve);
        // });
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

    convertToNumberArray(array) {
        return [...array].map((item) => +item);
    }

    compareNumbers() {
        const userNumbers = this.getUserNumbers();
        const computerNumbers = this.getComputerNumbers();

        const strikeCount = this.countStrike(computerNumbers, userNumbers);
        const ballCount = this.countBall(computerNumbers, userNumbers);

        return [strikeCount, ballCount];
    }

    countStrike(computerNumbers, userNumbers) {
        return userNumbers.filter((userNumber, index) => userNumber === computerNumbers[index])
            .length;
    }

    countBall(computerNumbers, userNumbers) {
        return userNumbers.filter(
            (userNumber, index) =>
                computerNumbers.includes(userNumber) && computerNumbers[index] !== userNumber
        ).length;
    }

    printHint(strikeCount, ballCount) {
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

    checkThreeStrike(strikeCount) {
        const THREE_STRIKE = 3;
        if (strikeCount !== THREE_STRIKE) {
            this.gameLoop();
            return;
        }

        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

        this.inputToContinueGame((inputToContinueGame) => {
            const isInvalidatedAnswer = this.invalidateAnswer(inputToContinueGame);
            if (isInvalidatedAnswer) {
                throw new Error('inputToContinueGame, 잘못된 값을 입력하였습니다.');
            }

            const [CONTINUE_GAME, GAME_END] = ['1', '2'];
            if (inputToContinueGame === CONTINUE_GAME) {
                this.setNewComputerPick(true);
            } else if (inputToContinueGame === GAME_END) {
                this.setGameState(false);
            }

            this.gameLoop();
        });
    }

    inputToContinueGame(callback) {
        Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', callback);
        // return new Promise((resolve, _) => {
        //     Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', resolve);
        // });
    }

    invalidateAnswer(answer) {
        const couldBeAnswer = ['1', '2'];
        return !couldBeAnswer.includes(answer);
    }
}

const myApp = new App();
myApp.play();

module.exports = App;
