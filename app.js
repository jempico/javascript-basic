function makeOperation(n1, operator, n2) {
    let result = ''
    
    if (typeof n1 == 'number' && typeof n2 == 'number' ) {
        if (operator === '+') {
            result = n1 + n2
        } else if (operator === '-') {
            result = n1 - n2
        } else if (operator === '×' || operator === 'x') {
            result = n1 * n2
        } else if (operator === '/' || operator === '÷') {
            if(n2 === 0) {
                result = n1;
            } else {
                result = n1/n2;
            }
        }
        console.log(result);
    }
    else {
        console.log('Please enter a number');
    } 
  }

