const clearButton = document.querySelector('.calc__btn--clear');
const backspaceButton = document.querySelector('.calc__btn--backspace');
const equalButton = document.querySelector('.calc__btn--equal');
const result = document.querySelector('.calc__result');
let numberButton = document.querySelectorAll('.calc__btn--number');
let operatorButton = document.querySelectorAll('.calc__btn--operator');

result.textContent = '0';
let operator = null;
let a = null;
let b = null;


clearButton.addEventListener('click', function clearState() {
  result.textContent = '0';
})

backspaceButton.addEventListener('click', function deleteNumber() {
  let str = result.textContent;
  let backspaceStr = str.slice(0, -1);

  if (backspaceStr) {
    result.textContent = backspaceStr;
  } else {
    result.textContent = '0';
  }
})

equalButton.addEventListener('click', function getResult() {
  b = result.textContent;
  result.textContent = Calc(operator, a, b);

  a = null;
  b = null;
  operator = null;

})

for (let number of numberButton) {
  number.onclick = function() {
    if (result.textContent !== '0') {
      result.textContent += number.textContent;
    } else {
      result.textContent = number.textContent;
    }
  }
}

for (let op of operatorButton) {
  op.onclick = function() {
    operator = op.id;

    if (a === null) {
      a = result.textContent;
      result.textContent = '0';
    } else if (b === null) {
      b = result.textContent;
    }
    console.log (a, b);
  }
}

function Calc(operator, a, b) {
  const isValidOperand = isFinite(a) && isFinite(b);

  let operations = {
    'sum': +a + +b,
    'sub': a - b,
    'multi': a * b,
    'div': a / b,
  }

  if (isValidOperand) {
    return operations[operator];
  } else {
    return 'Error!'
  }
}

