const nota1 = 5;
const nota2 = 1;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if(media.toFixed(2) <  5) {
    console.log('Reprovado!');
}else if(media >= 5 && media <= 5.99){
    console.log('Recuperação!');
}else{
    console.log('Aprovador!');
}