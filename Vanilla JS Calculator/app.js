const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

//console.log(buttons);

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;
  //console.log(value);

  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
    return;
  }

  if (value === "=") {
    const total = eval(accumulativeCalculation);
    screenDisplay.textContent = total;
    calculation = [total];
    return;
  }

  calculation.push(value);
  //console.log(calculation)

  accumulativeCalculation = calculation.join("");
  screenDisplay.textContent = accumulativeCalculation;
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
