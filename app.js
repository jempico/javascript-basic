//NIVELL 1

//Task 1
    console.log('Hola Mundo');

//Task 2
    alert('Me llamo Jemimah');

//Task 3
    let myName = "Jemimah";
    let surName = "Pico";

//Task 4
    let num1 = 10;
    let num2 = 5;
    console.log(num1 + num2);

//Task 5
    let nota_examen = 4;

    if (nota_examen < 5) {
        alert(`OOOhhh has suspendido el examen con un ${nota_examen}`); 
    } else if (nota_examen >= 5) {
        alert(`Enhorabuena, has aprobado el examen con un ${nota_examen}`);
    };

//Task 6
    let str = "Tinc un cotxe de color blau";
    let regex = /o/gi;
    let replaced = str.replace('blau', 'verd').replace(regex, 'u');
        console.log(replaced);

//Task 7
    let objects = ['taula', 'cadira', 'ordinador', 'llibreta'];
    let index = objects.forEach(function(word) {
        console.log(`L'objecte ${word} està a la posició ${objects.indexOf(word)}`);
    })

//Task 8

function calculadora(operador, valor1, valor2) {
    
        if (operador === 'suma') {
            console.log(valor1 + valor2);
        } else if (operador === 'resta') {
            console.log(valor1 - valor2);
        } else if (operador === 'multiplica' || operador === 'multiplicación') {
            console.log(valor1 * valor2);
        } else if (operador === 'divide' || operador === 'división') {
            if(valor2 === 0) {
                console.log(valor1);
            } else {
                console.log(valor1/valor2);
            }
        }
    }

var resultat = calculadora('resta', 40, 20);

