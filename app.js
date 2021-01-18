console.log('Hola Mundo');
alert('Me llamo Jemimah');
let myName = "Jemimah";
let surName = "Pico";

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

let nota_examen = 4;
if (nota_examen < 5) {
    alert(`OOOhhh has suspendido el examen con un ${nota_examen}`); 
} else if (nota_examen >= 5) {
    alert(`Enhorabuena, has aprobado el examen con un ${nota_examen}`);
};


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
        console.log(`El resultado de ${n1} ${operator} ${n2} es ${result}`);
    }
    else {
        console.log('Please enter a number');
    } 
  }

makeOperation(10, "+", 5);
makeOperation(10, "-", 5);
makeOperation(10, "x", 5);
makeOperation(10, "/", 5);
makeOperation(10, "÷", 0);