const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((question, callback) => {
            callback(input);
        });
    }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('숫자 야구 게임', () => {
    test('컴퓨터가 선택할 숫자 3개 정하기', () => {
        const randoms = [1, 3, 5, 5, 8, 9];
        mockRandoms(randoms);

        const myApp = new App();
        myApp.pickComputerNumber();

        expect(myApp.getComputerNumbers()).toEqual([1, 3, 5]);
    });
});

//https://mulder21c.github.io/jest/docs/en/next/using-matchers
