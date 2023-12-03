/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 váriaveis, sendo elas:
1 - Preço do combistível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustivel = 5.62;
const kmPorLitro = 9.6;
let distanciaKM = 403;

let valorGasto = (distanciaKM / kmPorLitro) * precoCombustivel;

console.log(valorGasto.toFixed(2));


