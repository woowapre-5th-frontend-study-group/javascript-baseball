// const App2 = require("./App2");
// new App2().play();

const Validator = require("./Utils/Validator");

try {
  const validatedValue = new Validator("123")
    .shouldBeA()
    .withMessage("에러A~")
    .shouldBeB()
    .withMessage("에러B~")
    .shouldBeC()
    .withMessage("에러C~")
    .get();
  console.log("제가 받은: " + validatedValue);
} catch (error) {
  console.log("에러: " + error);
}
