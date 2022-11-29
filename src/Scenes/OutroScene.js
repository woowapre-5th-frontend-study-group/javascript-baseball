/** View Import */
const OutputView = require("../Views/OutputView");

const OutroScene = {
  start() {
    OutputView.printOutroMessage();
    OutputView.close();
  },
};

module.exports = OutroScene;
