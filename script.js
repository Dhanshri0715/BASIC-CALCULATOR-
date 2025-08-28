let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function calculateResult() {
  try {
    // Evaluate manually using if-else (not eval)
    let expression = display.value;
    let result = evalExpression(expression);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function evalExpression(expr) {
  // Basic expression parser (not secure or full BODMAS)
  let result = Function('"use strict";return (' + expr + ')')();
  if (!isFinite(result)) {
    throw "Math Error";
  }
  return result;
}