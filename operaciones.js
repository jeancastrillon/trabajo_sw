const args = process.argv;

if (args.length !==4) {
    console.log("Por favor inserte 2 numeros");
    process.exit(1);
}

const num1 = parseFloat(args[2]);
const num2 = parseFloat(args[3]);


const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : "no se puede dividir por cero";


console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicacion: ${multiplicacion}`);
console.log(`Division: ${division}`);
