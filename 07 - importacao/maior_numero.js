const {gets, print} = require('./funcoes_auxiliares');


const numeroSorteados = []

for (let i = 0; i < 5; i++) {
    const numero = gets();
    numeroSorteados.push(numero);
    
}

let maiorValor = 0

for (let i = 0; i < 5; i++) {
    const numero = numeroSorteados[i];
    if(numero > maiorValor){
        maiorValor = numero;
    }
}
print(maiorValor);
