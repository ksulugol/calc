const clearButton = document.querySelector('.calc__btn--clear');
const deleteButton = document.querySelector('.calc__btn--delete');
const equalButton = document.querySelector('.calc__btn--equal');
const result = document.querySelector('.calc__result');
let numberButton = document.querySelectorAll('.calc__btn--number');
let operatorButton = document.querySelectorAll('.calc__btn--operator');

result.innerHTML = '0';
let operator;
let a;
let b;

clearButton.addEventListener('click', function clearState() {
  result.innerHTML = '0';
  operator = null;
  a = null;
  b = null;
})


deleteButton.addEventListener('click', function deleteNumber() {
  let str = result.innerHTML;
  let newStr = str.slice(0, -1);

  if (newStr) {
    result.innerHTML = newStr;
  } else {
    result.innerHTML = '0';
  }
})

equalButton.addEventListener('click', function getResult() {
  b = result.innerHTML;
  result.innerHTML = Calc();

  operator = null;
  a = null;
  b = null;
})

// НЕ РАБОТАЕТ! ПОЧЕМУ?
// numberButton.addEventListener('click', function addNumber() {
//   for (let number of numberButton) {
//     if (result.innerHTML !== '0') {
//       result.innerHTML += number.innerHTML;
//     } else {
//       result.innerHTML = number.innerHTML;
//     }
//   }
// });

for (let number of numberButton) {
  number.onclick = function() {
    if (result.innerHTML !== '0') {
      result.innerHTML += number.innerHTML;
    } else {
      result.innerHTML = number.innerHTML;
    }
  }
}

for (let op of operatorButton) {
  op.onclick = function () {
    operator = op.id;

    if (a === null) {
      a = result.innerHTML;
      result.innerHTML = '0';
    } else if (b === null) {
      b = result.innerHTML;
    }
    console.log (a, b);
  }
}

function Calc(operator, a, b) {
  const isNotValidOperand = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b); 

  let operations = {
    'sum' : a + b,
    'sub' : a - b,
    'multi' : a * b,
    'div' : (b !== 0 ? a / b : 'You cannot divide by zero!'),
  }

  if (isNotValidOperand) {
    return 'Error';
  } else if (operator in operations) {
    return operations[operator];
  } else {
    return 'Unknown operation';
  }
}

console.log( Calc('sumi', 2, 2) ); 
console.log( Calc('sub', 'h', 2) );
console.log( Calc('multi', 1, 2) );
console.log( Calc('div', 1, 0) );
console.log( Calc('rem', 8, 0) );
console.log( Calc('exp', 2, 2) );

