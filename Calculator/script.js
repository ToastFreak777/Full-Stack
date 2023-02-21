const calculator = {
  screen: document.querySelector("#total"),
  preview: document.querySelector("#preview"),
  btns: document.querySelectorAll(".square-sm"),
  equation: "",
};

calculator.btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.className.split(" ")[0]) {
      case "clear":
        reset();
        break;
      case "plus-minus":
        calculator.screen.textContent = -+calculator.screen.textContent;
        break;
      case "percent":
        calculator.screen.textContent = +calculator.screen.textContent / 100;
        break;
      case "zero":
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
      case "decimal":
        appendValues(e.target.textContent);
        break;
      case "backspace":
        backspace();
        break;
      case "addition":
      case "subtract":
      case "divide":
      case "multiply":
        calculator.equation += `${calculator.screen.textContent} ${e.target.textContent} `;
        calculator.preview.textContent = calculator.equation;
        clearScreen();
        break;

      case "equal":
        calculator.equation += calculator.screen.textContent;
        calculator.screen.textContent = eval(calculator.equation);
        calculator.preview.textContent = calculator.equation;
        calculator.equation = "";
    }
  });
});

function appendValues(value) {
  if (calculator.screen.textContent === "0")
    calculator.screen.textContent = `${value}`;
  else calculator.screen.textContent += `${value}`;
}

function backspace() {
  calculator.screen.textContent = calculator.screen.textContent.slice(
    0,
    calculator.screen.textContent.length - 1
  );
}

function clearScreen() {
  calculator.screen.textContent = "0";
}

function reset() {
  clearScreen();
  calculator.preview.textContent = "";
  calculator.equation = "";
}
