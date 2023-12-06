
function calcularImc(peso,altura){
    return  peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return('Abaixo do peso!');
    }else if(imc >= 18.5 && imc < 25){
        return('Peso normal!');
    }else if(imc >= 25 && imc < 30){
        console.log('Acima do peso!');
    }else if(imc >= 30 && imc < 40){
        console.log('Obeso!');
    }else{
        console.log('Obesidade Grave!');
    }
}

function main(){
const peso = 75;
const altura = 1.75;
const imc = calcularImc(peso,altura);

console.log(classificarImc(imc));
}
const main2 = main;
console.log(main2);
/*
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo (percentualJuros / 100) * valor;
    return valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));


function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) * quadrado(10));


function sayMyName(name){
    console.log('Your name is:' + name);
}

sayMyName('Luciano');


function teste(){
    console.log('teste');
}

teste();
*/