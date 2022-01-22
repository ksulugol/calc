function calc(operator, a, b) {

  const isNotValidOperand = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b);

  if (isNotValidOperand) {
    return 'Error';
  } else {
    
      switch(operator) {
        case 'sum':
          return a + b;

        case'sub':
          return a - b;

        case 'multi':
          return a * b;

        case 'exp':    
          return a ** b;

        case 'rem':
          if (b === 0) {
            return 'You cannot divide by zero!';
          } else {
              return a % b;
          }

        case 'div': 
          if (b === 0) {
            return 'You cannot divide by zero!';
          } else {
              return a / b;
          }

        default:
          return 'Unknown operation'        
      }
  }
} 


console.log( calc('sum', 2, 2) ); 
console.log( calc('sub', 2, 2) );
console.log( calc('multi', 1, 2) );
console.log( calc('div', 1, 0) );
console.log( calc('rem', 8, 0) );
console.log( calc('exp', 2, 3) );



