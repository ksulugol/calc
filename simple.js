function calc(operator, a, b) {
  let result;
  const isNotValidOperand = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b);

  if (isNotValidOperand) {
    result = 'Error';
  } else if (operator === 'sum') {
    result = a + b;
  } else if (operator === 'sub') {
    result = a - b;
  } else if (operator === 'multi') {
    result = a * b;
  } else if (operator === 'exp') {
    result = a ** b;
  } else if (operator === 'rem') {
    result = a % b;
  } else if (operator === 'div') {
    if (b === 0) {
      result = 'You cannot divide by zero!';
    } else {
    result = a / b;
    }
  } else {
    result = 'Unknown operation';
  }
  return result;
}

console.log( calc('sum', 1, 2) ); 
console.log( calc('sub', 1, 2) );
console.log( calc('multi', 1, 2) );
console.log( calc('div', 1, 0) );
console.log( calc('rem', 8, 3) );
console.log( calc('exp', 2, 3) );


