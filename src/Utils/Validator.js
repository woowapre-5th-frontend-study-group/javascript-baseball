class Validator {
  #data;
  #error;

  constructor(value) {
    this.#data = value;
  }

  shouldBeA() {
    console.log("A에서 출력: " + this.#data);
    return this;
  }

  shouldBeB() {
    console.log("B에서 출력: " + this.#data);
    if (this.#data !== "B") {
      this.#error = true;
    }

    return this;
  }

  shouldBeC() {
    console.log("C에서 출력: " + this.#data);
    return this;
  }

  withMessage(message) {
    if (this.#error) {
      throw message;
    }

    return this;
  }

  get() {
    if (this.#error) {
      return null;
    }

    return this.#data;
  }

  shouldBeNumber(value) {
    if (
      typeof value === "number" &&
      !Number.isNaN(value) &&
      Number.isFinite(value)
    ) {
    }
    return this;
  }

  shouldBeExcludsive() {}
}

module.exports = Validator;
