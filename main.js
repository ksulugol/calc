function calc(operator, a, b) {
  let result;
  const isNotValidOperand = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b);

  if (isNotValidOperand) {
    result = 'Error';
  } else {
    
      switch(operator) {
        case 'sum':
          result = a + b;
          break;

        case'sub':
          result = a - b;
          break;

        case 'multi':
          result = a * b;
          break;

        case 'exp':    
          result = a ** b;
          break;

        case 'rem':
          if (b === 0) {
            result = 'You cannot divide by zero!';
          } else {
              result = a % b;
          }
            break;

        case 'div': 
          if (b === 0) {
            result = 'You cannot divide by zero!';
          } else {
              result = a / b;
          }
            break;

        default:
          result = 'Unknown operation'        
      }
  }
  return result;
} 


console.log( calc('sum', 2, 2) ); 
console.log( calc('sub', 2, 2) );
console.log( calc('multi', 1, 2) );
console.log( calc('div', 1, 0) );
console.log( calc('rem', 8, 0) );
console.log( calc('exp', 2, 3) );

