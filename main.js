function Calc(operation, a, b) {
  const isNotValidOperand = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b); 

  let operations = {
    'sum' : a + b,
    'sub' : a - b,
    'multi' : a * b,
    'div' : (b !== 0 ? a / b : 'You cannot divide by zero!'),
    'rem' : (b !== 0 ? a % b : 'You cannot divide by zero!'),
    'exp' : a ** b,
  }

  if (isNotValidOperand) {
    return 'Error';
  } else if (operation in operations) {
    return operations[operation];
  } else {
    return 'Unknown opearation';
  }
}

console.log( Calc('sumi', 2, 2) ); 
console.log( Calc('sub', 'h', 2) );
console.log( Calc('multi', 1, 2) );
console.log( Calc('div', 1, 0) );
console.log( Calc('rem', 8, 0) );
console.log( Calc('exp', 2, 2) );