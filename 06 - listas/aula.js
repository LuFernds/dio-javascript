/*const alunos = ['joão','Vitor','Marina'];

console.log(alunos);

console.log(alunos[0]);

console.log(alunos[3]);
*/
/*
const alunos = ['joão','Vitor','Marina'];

alunos.push('Luciano');

alunos[4] = 'Carlos';

console.log(alunos);

const numero = ['1', '2', '3'];

console.log(numero);

console.log(numero.pop());

console.log(numero);

numero[2] = '4';

console.log(numero);

console.log(numero.shift());

console.log(numero);
*/

/*
const nome = 'Luciano Pereira da Silva Fernandes';

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
}
*/
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}
const media = soma / notas.length;
console.log(media);

