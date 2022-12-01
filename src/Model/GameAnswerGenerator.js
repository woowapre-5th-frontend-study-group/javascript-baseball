const GameRandomNumberGenerator = {
  //컴퓨터(상대)가 정답 생성하기
  generate() {
    const computer = []; //정답 배열
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9); //1부터 9까지 숫자 하나 고르기
      if (!computer.includes(number)) {
        //배열에 없다면
        computer.push(number); //배열에 추가
      }
    }
    return computer;
  },
};

module.exports = GameRandomNumberGenerator;
