/// gerar um numero aleatorio entre 1 e 75
/// mim = 1
/// max = 75

function gerarNumeroAleatorio(min, max) {
    return Math.ceil(Math.random()*(max - min));
}

    let numeroAleatorio = gerarNumeroAleatorio(3,50);
    
    console.log(numeroAleatorio);

//function gerarNumeroAleatorio(min, max) {
//    return Math.ceil(Math.random()*(max - min));
//}

//    let cartela = [];

//for(let i = 0;i < 25; i++){
//    let numeroAleatorio = gerarNumeroAleatorio(5,45);
//   cartela.push(numeroAleatorio);
//}

//    console.log(cartela);

function gerarNumeroAleatorio(min, max) {
    return Math.ceil(Math.random()*(max - min));
}

    let cartela = [];
    let pares = [];
    let impares = [];

/// loop de repeticao / laco de repeticao
/// fira code   

for(let i = 0;i < 25; i++){
    let numeroAleatorio = gerarNumeroAleatorio(1,75);
    if(cartela.indexOf(numeroAleatorio) === -1)
        cartela.push(numeroAleatorio);
        if(numeroAleatorio % 2 === 0){
            pares.push(numeroAleatorio);
        }else{
            impares.push(numeroAleatorio);
        }
}

    console.log(cartela.sort(function(a, b) {return a -b}));
    console.log("Números Pares", pares.sort(function(a, b) {return a - b}));
    console.log("Números Impares", impares.sort(function(a, b) {return a - b}));

    let numeroSorteados = [];

function sorteio(){
    
    let intervalo = setInterval(function(){

        let numeroSorteado = gerarNumeroAleatorio(1,50);
        let numeroExiste = numeroSorteados.indexOf(numeroSorteado) !== -1;

        if(numeroExiste === false){
            numeroSorteados.push(numeroSorteado);
        }else{
            while(numeroExiste === true){
                numeroSorteado = gerarNumeroAleatorio(1,75);
                numeroExiste = numeroSorteados.indexOf(numeroSorteado) !== -1;
                if(numeroExiste === false){
                numeroSorteados.push(numeroSorteado);
                }
            }
        }

        console.log("Números Sorteados", numeroSorteados);
        console.log("Tamanho", numeroSorteados.length);

        if(numeroSorteados.length === 75){
        clearInterval(intervalo);
        }
    }, 200)
}

sorteio();


///
///

function conferirCartela(intervalo){
    
    if(numeroSorteados.length < 25)
        return false;

    let ganhouBingo = true;
    let quantidadeNumeroSorteados = 0;

    numeroSorteados.forEach(function(sorteado){
        cartela.forEach(function(meuNumero){
            if(sorteado == meuNumero){
                ganhouBingo = true;
                quantidadeNumeroSorteados++;
            }
        })
    })

    if(quantidadeNumeroSorteados === cartela.length){
        console.log("Parabéns! Você ganhou o bingo!");
        clearInterval(intervalo);
    }else{
        console.log("Você ainda não chegou lá! Faltam" + (cartela.length - quantidadeNumeroSorteados) + " números");
    }
}

sorteio();