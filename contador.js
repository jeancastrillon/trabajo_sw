let segundos = 0;

const intervalo = setInterval (() => {
    segundos++;
    console.log(`Han pasado ${segundos} segundos`);
    if (segundos == 10) {
        clearInterval(intervalo);
    }
} , 1000);

