const MissionUtils = require("@woowacourse/mission-utils");
const { VALUE } = require("../constant/Value");

const RandomNumberMaker = () => {
  let pickedNumber = [];
  while (pickedNumber.length < VALUE.RANGE_OF_COMPUTER_NUMBER.LENGTH) {
    let number = MissionUtils.Random.pickNumberInRange(
      VALUE.RANGE_OF_COMPUTER_NUMBER.MINIMUM,
      VALUE.RANGE_OF_COMPUTER_NUMBER.MAXIMUM
    );
    if (!pickedNumber.includes(number)) pickedNumber.push(number);
  }
  return pickedNumber;
};

module.exports = RandomNumberMaker;
