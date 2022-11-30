const { deepFreeze } = require("../utils");

const NUMBER_DIGITS = 3;

const OUT_COUNT = 3;

const COMMAND = {
  restart: 1,
  quit: 2,
};

const exportsObject = {
  COMMAND,
  NUMBER_DIGITS,
  OUT_COUNT,
};
deepFreeze(exportsObject);

module.exports = exportsObject;
