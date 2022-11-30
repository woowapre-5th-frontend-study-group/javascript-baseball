const MESSAGE = {
  start: '숫자 야구 게임을 시작합니다.',
  success: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  inputNumber: '숫자를 입력해주세요 : ',
  inputOption: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const ERROR_HEADING = '[ERROR]';

const ERROR_MESSAGE = {
  isNotNumber: `${ERROR_HEADING} 숫자만 입력 가능합니다.`,
  length: `${ERROR_HEADING} 숫자 3개를 입력해야 합니다.`,
  includesZero: `${ERROR_HEADING} 0은 입력할 수 없습니다.`,
  overlap: `${ERROR_HEADING} 중복된 숫자를 입력할 수 없습니다.`,
  option: `${ERROR_HEADING} 1 또는 2를 입력하지 않아 애플리케이션이 종료됩니다.`,
};

const OPTION = {
  restart: '1',
  exit: '2',
};

const OUTPUT = {
  nothing: '낫싱',
  ball: '볼',
  strike: '스트라이크',
};

const STRIKE_COUNT = 3;

module.exports = {
  MESSAGE,
  OPTION,
  OUTPUT,
  ERROR_MESSAGE,
  STRIKE_COUNT,
};
