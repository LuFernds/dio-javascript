/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 váriaveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de combustivel que está no seu carro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/


const precoEtanol = 3.64;
const precoGasolina = 5.62;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 9.6;
let distanciaKM = 403;

let distanciaPorLitro = distanciaKM / kmPorLitro;

if(tipoCombustivel === 'etanol'){
    const valorGasto = distanciaPorLitro * precoEtanol;
    console.log('tipo de carro: '+tipoCombustivel+', valor gasto: '+valorGasto.toFixed(2));
}else{
    const valorGasto = distanciaPorLitro * precoGasolina;
    console.log('tipo de carro: '+tipoCombustivel+', valor gasto: '+valorGasto.toFixed(2));
}