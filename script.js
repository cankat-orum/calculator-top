class Calculator {
  constructor(inputDisplay, outputDisplay) {}

  clearAllHistory() {}

  backspace() {}

  changePercentToDecimal() {}

  insertNumber(value) {}

  insertOperation(value) {}

  negateNumber() {}

  insertDecimalPoint() {}

  generateResult() {}
}

const inputDisplay = document.querySelector("#history");
const outputDisplay = document.querySelector("#result");

const allClearButton = document.querySelector("[data-all-clear]");
const backspaceButton = document.querySelector("[data-backspace]");
const percentButton = document.querySelector("[data-percent]");
const operationButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const negationButton = document.querySelector("[data-negation]");
const decimalButton = document.querySelector("[data-decimal]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(inputDisplay, outputDisplay);

allClearButton.addEventListener("click", () => {
  calculator.clearAllHistory();
});

backspaceButton.addEventListener("click", () => {
  calculator.backspace();
});

percentButton.addEventListener("click", () => {
  calculator.changePercentToDecimal();
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let { target } = event;
    calculator.insertOperation(target.dataset.operator);
  });
});

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let { target } = event;
    calculator.insertNumber(target.dataset.number);
  });
});

negationButton.addEventListener("click", () => {
  calculator.negateNumber();
});

decimalButton.addEventListener("click", () => {
  calculator.insertDecimalPoint();
});

equalsButton.addEventListener("click", () => {
  calculator.generateResult();
});
