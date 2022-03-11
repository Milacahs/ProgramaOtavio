function parouimpar(numero){
    let resto = numero % 2;

    if(resto == 0){
        console.log("O número é par!");
    } else {
        console.log("O número é impar!");
    }
}

parouimpar(234377)


function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

module.exports = {parouimpar, soma, subtracao};