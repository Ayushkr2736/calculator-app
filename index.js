function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
  document.getElementById("display").value += number;
}

function appendOperator(operator) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1);
  if (display.value && !isNaN(lastChar)) {
    display.value += operator;
  }
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
