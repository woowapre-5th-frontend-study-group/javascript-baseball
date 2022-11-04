const { Random, Console } = require('@woowacourse/mission-utils');

class App {
    constructor() {}
    play() {
        Console.print('숫자 야구 게임을 시작합니다.');
        this.pickComputerNumber();
        this.startBaseballGame();
    }
}

module.exports = App;
