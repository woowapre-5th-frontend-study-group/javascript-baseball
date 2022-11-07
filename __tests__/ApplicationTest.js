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
    test('게임 종료 후 재시작', async () => {
        const randoms = [1, 3, 5, 5, 8, 9];
        const answers = ['246', '135', '1', '597', '589', '2'];
        const logSpy = getLogSpy();
        const messages = [
            '숫자 야구 게임을 시작합니다.',
            '낫싱',
            '3스트라이크',
            '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
            '1볼 1스트라이크',
            '3스트라이크',
            '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
            '게임 종료!',
        ];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        expect(logSpy).toHaveBeenCalledWith(messages);
        // messages.forEach((output) => {
        //     console.log(output);
        //     // expect(logSpy).toHaveBeenCalledWith(output);
        //     // expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        // });
    });

    test('예외 테스트', () => {
        const randoms = [1, 3, 5];
        const answers = ['1234'];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        expect(app.play()).rejects.toThrow('잘못된 값을 입력하였습니다.');
    });
});
