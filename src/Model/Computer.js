const { Random } = require("@woowacourse/mission-utils");

const computerNum = {
  //컴퓨터(상대)가 정답 생성하기
  generateAnswer() {
    const computerNum = []; //정답 배열
    while (computerNum.length < 3) {
      const number = Random.pickNumberInRange(1, 9); //1부터 9까지 숫자 하나 고르기
      if (!computerNum.includes(number)) {
        //배열에 없다면
        computerNum.push(number); //배열에 추가
      }
    }
    return computerNum;
  },
};

module.exports = computerNum;
