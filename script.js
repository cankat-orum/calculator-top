class Calculator {
  constructor(input, output) {
    this.inputDisplay = input;
    this.outputDisplay = output;
    this.inputHistory = [];
  }

  clearAllHistory() {
    this.inputHistory = [];
    this.updateInputDisplay();
    this.updateOutputDisplay("0");
  }

  backspace() {
    switch (this.getLastInputType()) {
      case "number":
        if (this.getLastInputValue().length > 1) {
          this.editLastInput(this.getLastInputValue().slice(0, -1), "number");
        } else {
          this.deleteLastInput();
        }
        break;
      case "operator":
        this.deleteLastInput();
        break;
      default:
        return;
    }
  }

  changePercentToDecimal() {}

  insertNumber(value) {
    if (this.getLastInputType() === "number") {
      this.appendToLastInput(value);
    } else if (
      this.getLastInputType() === "operator" ||
      this.getLastInputType() === null
    ) {
      this.addNewInput(value, "number");
    }
  }

  insertOperation(value) {}

  negateNumber() {}

  insertDecimalPoint() {}

  generateResult() {}

  getLastInputType() {
    return this.inputHistory.length === 0
      ? null
      : this.inputHistory[this.inputHistory.length - 1].type;
  }

  getLastInputValue() {
    return this.inputHistory.length === 0
      ? null
      : this.inputHistory[this.inputHistory.length - 1].value;
  }

  getAllInputValues() {
    return this.inputHistory.map((entry) => entry.value);
  }

  getOutputValue() {
    return this.outputDisplay.value.replace(/,/g, "");
  }

  addNewInput(value, type) {
    this.inputHistory.push({ type: type, value: value.toString() });
    this.updateOutputDisplay();
  }

  appendToLastInput(value) {
    this.inputHistory[this.inputHistory.length - 1].value += value.toString();
    this.updateOutputDisplay();
  }

  editLastInput(value, type) {
    this.inputHistory.pop();
    this.addNewInput(value, type);
  }

  deleteLastInput() {
    this.inputHistory.pop();
    this.updateInputDisplay();
  }

  updateInputDisplay() {
    this.inputDisplay.value = this.getAllInputValues().join(" ");
  }

  updateOutputDisplay(value) {
    this.outputDisplay.value = Number(value).toLocaleString();
  }
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
